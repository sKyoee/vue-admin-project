import { createApp } from "vue";
import App from "./App.vue";
// elementPlus插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 国际化配置，语言设置为中文
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 引入全局样式
import "@/styles/index.scss";
// svg
import "virtual:svg-icons-register";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
