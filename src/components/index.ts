import SvgIcons from "@/components/SvgIcons/index.vue";
import type { App, Component } from "vue";

interface GlobalComponents {
  [key: string]: Component;
}
const componentObj: GlobalComponents = { SvgIcons };
// 对外暴露插件
export default {
  install(app: App) {
    Object.keys(componentObj).forEach((item) => {
      app.component(item, componentObj[item]);
    });
  },
};
