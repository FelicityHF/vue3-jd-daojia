<template>
  <div id="nearby">
    <div class="title">
      <h2>附近店铺</h2>
    </div>
    <router-link
      :to="'/shop/' + item.id"
      v-for="item in stores"
      :key="item.name"
    >
      <store-card v-bind:item="item"></store-card>
    </router-link>
  </div>
</template>

<script>
import storeCard from "../../components/storeCard.vue";
// import axios from "axios";
import { ref } from "vue";
export default {
  name: "nearbyVfor",
  components: { storeCard },
  setup() {
    const stores = ref([]);
    const getStores = async () => {
      fetch("http://localhost:3000/data")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          stores.value = data;
        });
    };
    getStores();
    // const stores = [
    //   {
    //     id: 0,
    //     storeName: "沃尔玛",
    //     sales: "1万+",
    //     basis: "¥0",
    //     express: "¥5",
    //     discount: "VIP尊享满89元减4元运费券",
    //   },
    //   {
    //     id: 1,
    //     storeName: "华润万家",
    //     sales: "1万+",
    //     basis: "¥0",
    //     express: "¥5",
    //     discount: "VIP尊享满89元减4元运费券",
    //   },
    //   {
    //     id: 2,
    //     storeName: "山姆",
    //     sales: "1万+",
    //     basis: "¥0",
    //     express: "¥5",
    //     discount: "VIP尊享满89元减4元运费券",
    //   },
    //   {
    //     id: 3,
    //     storeName: "永辉",
    //     sales: "1万+",
    //     basis: "¥0",
    //     express: "¥5",
    //     discount: "VIP尊享满89元减4元运费券",
    //   },
    // ];
    return { stores };
  },
};
</script>

<style lang="scss" scoped>
#nearby {
  width: 100%;
  background-color: #fff;
  padding: 0 18px;
  margin-bottom: 0.48rem;
  .title {
    height: 0.4rem;
    line-height: 0.4rem;
    h2 {
      font-size: 0.18rem;
    }
  }
}
</style>