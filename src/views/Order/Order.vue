<template>
  <div id="order">
    <div class="order-head">我的订单</div>
    <order-history></order-history>

    <tab-bar-vfor></tab-bar-vfor>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import tabBarVfor from "@/components/tabBarVfor.vue";
import orderHistory from "./orderHistory.vue";

export default {
  name: "Order",
  components: {
    tabBarVfor,
    orderHistory,
  },
};
</script>
<style lang="scss" scoped>
#order {
  .order-head {
    height: 0.44rem;
    background-color: #fff;
    text-align: center;
    font-size: 0.16rem;
    line-height: 0.44rem;
  }
}
</style>
