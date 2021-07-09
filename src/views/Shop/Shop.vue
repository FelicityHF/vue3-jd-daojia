<template>
  <div id="shop">
    <nav class="nav-bar">
      <span @click="clickToBack" class="iconfont">&#xe656;</span>
      <input class="nav-search" type="text" placeholder="请输入商品名称搜索" />
      <span class="iconfont search-icon">&#xe643;</span>
    </nav>
    <div class="store-wrapper">
      <store-card v-bind:item="shops.item"></store-card>
    </div>
    <shop-menus></shop-menus>
    <cart-preview></cart-preview>
  </div>
</template>
<script>
import storeCard from "../../components/storeCard.vue";
import shopMenus from "./shopMenus.vue";
import cartPreview from "./cartPreview.vue";
import { useRouter, useRoute } from "vue-router";
import { reactive } from "vue";
import axios from "axios";
export default {
  name: "Shop",
  components: { storeCard, shopMenus, cartPreview },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const clickToBack = () => {
      router.back();
    };
    const shops = reactive({ item: {} });
    const id = route.params.id;
    const getStore = () => {
      axios.get(`http://localhost:3000/data/${id}`).then((response) => {
        shops.item = response.data;
      });
    };
    getStore();

    const products = [
      {
        name: "番茄250g/份",
        sales: "10",
        price: "5.9",
        originalPrice: "8.9",
      },
      {
        name: "提子250g/份",
        sales: "10",
        price: "5.9",
        originalPrice: "8.9",
      },
      {
        name: "橘子250g/份",
        sales: "10",
        price: "5.9",
        originalPrice: "8.9",
      },
    ];
    return { shops, products, clickToBack };
  },
};
</script>
<style lang="scss" scoped>
#shop {
  position: relative;
  width: 100%;
  //   padding: 0 18px;
  background-color: #fff;
  height: 100vh;
  .nav-bar {
    position: relative;
    display: flex;
    padding: 0 18px;
    justify-content: space-between;
    align-items: center;
    height: 0.64rem;
    .iconfont {
      font-size: 0.2rem;
      color: #b7b7b7;
    }
    .search-icon {
      position: absolute;
      left: 0.6rem;
    }
    .nav-search {
      flex: 1;
      height: 0.32rem;
      background-color: #f5f5f5;
      border-radius: 0.16rem;
      border: none;
      outline: none;
      margin-left: 0.16rem;
      padding: 0 0.4rem;
    }
  }
  .store-wrapper {
    padding: 0 18px;
  }
}
</style>