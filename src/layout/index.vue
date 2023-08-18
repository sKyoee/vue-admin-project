<template>
  <div class="layout-contain">
    <div class="left">
      <logo />
      <div class="routes">
        <el-scrollbar height="100%">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="$base-menu-background"
            text-color="#fff"
            :default-active="$route.path"
          >
            <Menu :menuList="constantRoutes" />
          </el-menu>
        </el-scrollbar>
      </div>
    </div>
    <div class="right">
      <div class="top-bar"></div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import logo from "./logo/logo.vue";
import Menu from "./menu/menu.vue";
import useUserInfoStore from "@/store/modules/useUserInfo";
import constantRoutes from "@/router/routes.ts";
import { useRoute } from "vue-router";
const $route = useRoute();
const userInfoStore = useUserInfoStore();
console.log(userInfoStore.routes);
</script>

<style scoped lang="scss">
.layout-contain {
  width: 100%;
  display: flex;
  height: 100vh;
  .left {
    height: 100%;
    width: $base-menu-width;
    background-color: $base-menu-background;
    .routes {
      height: calc(100% - 50px);
      overflow: hidden;
      .el-menu {
        border: none;
      }
    }
  }
  .right {
    width: calc(100% - $base-menu-width);
    .top-bar {
      height: 50px;
      width: 100%;
      background-color: #bfa;
    }
  }
}
</style>
