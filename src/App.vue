<template>
  <div>测试</div>
  <SvgIcons name="home" color="red" width="100px" height="100px" />
</template>

<script lang="ts" setup>
import axios from "axios";
const test = async () => {
  let res = await axios.post("api/user/login", {
    username: "admin",
    password: "111111",
  });
  let res2 = await axios({
    url: "api/user/login",
    method: "post",
    data: {
      username: "admin",
      password: "111111",
    },
  });
  console.log(res.data);
};
test();
</script>

<style scoped lang="scss">
div {
  color: $base-color;
}
</style>
