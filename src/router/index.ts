import { createRouter, createWebHashHistory } from "vue-router";
import constantRoutes from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.path === "/login" && token) {
    next({
      path: "/",
      replace: true,
    });
    return;
  }
  next();
});
router.afterEach((to, from) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  }
});

export default router;
