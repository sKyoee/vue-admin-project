import { createApp } from "vue";
import App from "./App.vue";
// elementPlus插件
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 国际化配置，语言设置为中文
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 引入全局样式
import "@/styles/index.scss";
// svg
import "virtual:svg-icons-register";
// 引入路由
import router from "@/router";
// 引入pinia仓库
import pinia from "@/store";
// 引入全部element的icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);
app.use(pinia);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
