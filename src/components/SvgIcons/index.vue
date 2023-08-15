<template>
  <svg :style="{ width, height }">
    <use :xlink:href="`#icon-${name}`" :fill="color"></use>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    default: "home",
  },
  color: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "30px",
  },
  height: {
    type: String,
    default: "30px",
  },
});
</script>

<style scoped></style>
