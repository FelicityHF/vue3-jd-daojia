<template>
  <div id="shop-menus">
    <div class="left-tabs">
      <ul>
        <li v-for="item in tabLists" :key="item.tab">
          <div
            class="tab-title"
            :class="{ 'active-tab': currentTab === item.tab }"
            @click="clickTab(item.tab)"
          >
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
    <div class="right-menus">
      <div class="menu" v-for="item in products" :key="item.name">
        <img src="../../assets/images/西红柿.jpg" alt="" />
        <div class="product-info">
          <h3>{{ item.name }}</h3>
          <p class="sales-num">月销{{ item.sales }}+件</p>
          <p>
            <i>¥{{ item.price }}</i>
            <s>¥{{ item.originalPrice }}</s>
          </p>
        </div>
        <div class="operate-wrapper">
          <div
            class="iconfont minus-cart operate-btn"
            @click="
              () => {
                minusItemFromCart(shopId, item.id, item);
              }
            "
          >
            &#xe630;
          </div>
          <!-- 使用OC的语法？ -->
          <div class="product-num">
            {{ cartList?.[shopId]?.[item.id]?.count || 0 }}
          </div>
          <!-- 要传递的参数，shopId， productId， 商品信息item里的数据 -->
          <div
            class="iconfont add-to-cart operate-btn"
            @click="
              () => {
                addToCart(shopId, item.id, item);
              }
            "
          >
            &#xe6ac;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, toRefs } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// tab切换功能封装
// const useTabListsEffect = ()=>{

// }
// 购物车相关逻辑
const useCartEffect = () => {
  const store = useStore();
  const { cartList } = toRefs(store.state);
  // 加入购物车、数量等操作
  //shopId 其实就是当前进入的店铺的id，也是目前url里的id
  // productId  其实就是上面循环products时，item里的id
  const route = useRoute();
  const shopId = route.params.id;

  // 🌟🎈加入购物车操作
  const addToCart = (shopId, productId, productData) => {
    // console.log(shopId, productId, productData);
    // console.log(productData.name); //可以拿到商品名字
    //要将加购的商品信息存储到cartList里
    // 怎么添加到cartList对象里？
    //🎈 store.commit
    store.commit("addItemToCart", { shopId, productId, productData });
  };

  // 减去购物车的物品
  const minusItemFromCart = (shopId, productId, productData) => {
    store.commit("minusItemFromCart", { shopId, productId, productData });
  };
  return { cartList, addToCart, shopId, minusItemFromCart };
};
export default {
  name: "shopMenus",
  setup() {
    const tabLists = [
      { title: "全部商品", tab: "all" },
      { title: "秒杀", tab: "seckill" },
      { title: "新鲜水果", tab: "fruits" },
      { title: "休闲食品", tab: "food" },
      { title: "时令蔬菜", tab: "vegetable" },
      { title: "肉蛋家禽", tab: "meat" },
    ];
    const products = ref([]);
    const getProducts = (tab) => {
      axios
        .get("http://localhost:3000/products", { params: { tab } })
        // 请求时给url传参
        // Request URL: http://localhost:3000/products?tab=fruits
        .then((response) => {
          products.value = response.data;
        });
    };
    const currentTab = ref(tabLists[0].tab);
    const clickTab = (tab) => {
      // console.log(tab);//可以获取到tab的名称了
      getProducts(tab);
      currentTab.value = tab;
    };
    getProducts("all");

    const { cartList, addToCart, shopId, minusItemFromCart } = useCartEffect();

    return {
      tabLists,
      products,
      clickTab,
      currentTab,
      // productNum,
      // showNum,
      addToCart,
      cartList,
      shopId,
      minusItemFromCart,
    };
  },
};
</script>
<style lang="scss" scoped>
#shop-menus {
  position: absolute;
  top: 1.62rem;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
  background-color: #fff;
  width: 100%;
  // margin-top: -2px;
  .left-tabs {
    width: 0.76rem;
    height: 100%;
    background: #f5f5f5;
    overflow-y: scroll;
    .tab-title {
      display: inline-block;
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
    }
    .active-tab {
      background-color: #fff;
    }
  }
  .right-menus {
    flex: 1;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 0 18px;
    .menu {
      display: flex;
      position: relative;
      align-items: center;
      height: 0.92rem;
      border-bottom: 1px solid #f5f5f5;
      img {
        width: 0.68rem;
        height: 0.68rem;
        margin-right: 0.16rem;
      }
      .product-info {
        flex: 1;
        h3 {
          font-size: 0.14rem;
          margin-bottom: 0.06rem;
        }
        .sales-num {
          font-size: 0.12rem;
          margin-bottom: 0.06rem;
        }
        i {
          color: #e93b3b;
          font-size: 0.14rem;
          font-style: normal;
          margin-right: 0.06rem;
        }
        s {
          color: #999;
          font-size: 0.1rem;
        }
      }
      .operate-wrapper {
        position: absolute;
        right: 0;
        bottom: 0.12rem;
        display: flex;
        align-items: center;
        .operate-btn {
          font-size: 0.18rem;
          margin-left: 0.06rem;
          // vertical-align: middle;
        }
        .add-to-cart {
          color: #0091ff;
          font-size: 0.2rem;
        }
        .minus-cart {
          background-color: #fff;
          color: #666;
          color: #333;
          margin-right: 0.06rem;
        }
      }
    }
  }
}
</style>
