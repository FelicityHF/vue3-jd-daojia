<template>
  <div id="home">
    <head-bar></head-bar>
    <main-nav-vfor></main-nav-vfor>
    <nearby-vfor></nearby-vfor>
    <tab-bar-vfor></tab-bar-vfor>
  </div>
</template>

<script>
// @ is an alias to /src
import headBar from "./headBar.vue";
import mainNavVfor from "./mainNavVfor.vue";
import nearbyVfor from "./nearbyVfor.vue";
import tabBarVfor from "@/components/tabBarVfor.vue";

export default {
  name: "Home",
  components: {
    headBar,
    mainNavVfor,
    nearbyVfor,
    tabBarVfor,
  },
};
</script>
<style lang="scss">
</style>
