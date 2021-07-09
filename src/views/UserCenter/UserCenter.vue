<template>
  <div id="user-center">
    <user-head></user-head>
    <user-menu></user-menu>

    <tab-bar-vfor></tab-bar-vfor>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import tabBarVfor from "@/components/tabBarVfor.vue";
import userHead from "./userHead.vue";
import userMenu from "./userMenu.vue";

export default {
  name: "UserCenter",
  components: {
    tabBarVfor,
    userHead,
    userMenu,
  },
};
</script>
<style lang="scss" scoped>
</style>