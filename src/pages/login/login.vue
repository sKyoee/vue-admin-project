<template>
  <div class="login-wrapper">
    <img src="@/assets/images/background.jpg" alt="" />
    <el-card class="card">
      <div class="head">Hello</div>
      <div class="welcome">欢迎来到硅谷甄选</div>
      <el-form
        ref="formRef"
        :label-position="'right'"
        label-width="20px"
        style="width: 400px"
        :model="formData"
        :rules="formRules"
      >
        <el-form-item lable="username" prop="username">
          <el-input
            :prefix-icon="User"
            v-model="formData.username"
            clearable
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item lable="password" prop="password">
          <el-input
            type="password"
            :prefix-icon="Lock"
            v-model="formData.password"
            clearable
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="login(formRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue";
import type { FormInstance, FormRules } from "element-plus";
import { ref, reactive } from "vue";
import useUserInfoStore from "@/store/modules/useUserInfo.ts";
const userInfoStore = useUserInfoStore();
const formData = ref({
  username: "",
  password: "",
});
const formRef = ref<FormInstance>();
const formRules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      min: 4,
      max: 12,
      message: "用户名最少为4位,最多12位",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      min: 6,
      max: 18,
      message: "请输入6至18位数的密码",
      trigger: "blur",
    },
  ],
});
const login = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log(formData);
      const { username, password } = formData.value;
      userInfoStore.login({ username, password });
    } else {
      console.log(fields);
    }
  });
};
</script>

<style scoped lang="scss">
.login-wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .card {
    position: absolute;
    left: 55%;
    top: 30%;
    background-color: #2e57c1;
    color: white;
    border: none;
    .head {
      font-size: 40px;
      margin-bottom: 20px;
    }
    .welcome {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }
}
</style>
