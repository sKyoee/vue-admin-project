import { defineStore } from "pinia";
import { reqLogin, getUserInfo } from "@/api/user";
import type { loginData, userInfo } from "@/api/user/type";
import { ElMessage } from "element-plus";
import { ElNotification } from "element-plus";
import router from "@/router";
const useUserInfoStore = defineStore({
  id: "userInfo",
  state: () => {
    return {
      token: localStorage.getItem("token") || "",
      info: {} as userInfo,
      routes: [],
    };
  },
  actions: {
    login(data: loginData) {
      reqLogin(data).then((res) => {
        if (res.code === 200) {
          // 保存token
          localStorage.setItem("token", res.data.token);
          this.token = res.data.token;
          this.getInfo();
        } else {
          ElMessage({
            type: "error",
            message: "用户名或密码不正确",
            duration: 1000,
          });
        }
      });
    },
    getInfo() {
      getUserInfo().then((res) => {
        if (res.code === 200) {
          this.info = res.data.checkUser;
          router.replace("/home");
          ElNotification({
            title: "登录成功",
            message: `欢迎回来${this.info.username}`,
            type: "success",
          });
        } else {
          router.replace("/home");
          ElNotification({
            title: "登录成功",
            message: `用户信息获取失败，请尝试重新登录`,
            type: "error",
          });
        }
      });
    },
  },
  getters: {},
  persist: {
    paths: ["info"],
  },
});

export default useUserInfoStore;
