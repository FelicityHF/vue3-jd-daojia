<template>
  <div id="cart">
    <div class="cart-head">我的全部购物车</div>
    <cart-items></cart-items>
    <cart-items></cart-items>
    <cart-items></cart-items>

    <tab-bar-vfor></tab-bar-vfor>
  </div>
</template>

<script>
// @ is an alias to /src
import tabBarVfor from "../../components/tabBarVfor.vue";
import cartItems from "../../components/cartItems.vue";

export default {
  name: "Cart",
  components: {
    tabBarVfor,
    cartItems,
  },
};
</script>
<style lang="scss" scoped>
#cart {
  .cart-head {
    height: 0.44rem;
    background-color: #fff;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.16rem;
  }
}
</style>
