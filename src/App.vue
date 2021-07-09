<template>
  <router-view />
</template>

<script>
// import tabBarVfor from "./components/tabBarVfor.vue";
export default {
  name: "app",
  components: {
    // tabBarVfor,
  },
  setup() {},
};
</script>

<style lang="scss">
@import "style/variables.scss";
#home {
  color: $main-font-color;
}
</style>
