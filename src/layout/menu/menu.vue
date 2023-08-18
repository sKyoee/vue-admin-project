<template>
  <template v-for="item in routes" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item :index="item.path" @click="toRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
    <template v-if="item.children">
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          {{ item.meta.title }}
        </template>
        <template v-for="i in item.children" :key="i.path">
          <el-menu-item :index="i.path" v-if="!i.meta.hidden" @click="toRoute">
            <el-icon>
              <component :is="i.meta.icon"></component>
            </el-icon>
            <span>{{ i.meta.title }}</span>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();
const props = defineProps(["menuList"]);
const routes = computed(() => {
  const arr = [] as any;
  props.menuList.forEach((item: any) => {
    if (item.meta && item.meta.hidden == false) {
      arr.push(item);
    } else if (item.children && item.children.length > 1) {
      arr.push(item);
    } else if (item.children && item.children.length == 1) {
      arr.push(item.children[0]);
    }
  });
  return arr;
});
console.log("routes", routes.value);
const toRoute = (el: any) => {
  console.log(el.index);
  $router.push(el.index);
};
</script>

<style scoped></style>
