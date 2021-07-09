<template>
  <div id="cart-preview">
    <div class="cart-mask" v-show="isMaskShow" @click="hideCartMask">
      <div class="cart-products">
        <div class="cart-title">
          <label><input type="checkbox" class="check-all" /> 全选</label>
          <a
            class="clear-cart"
            href="javascript:;"
            @click="
              () => {
                clearCart(shopId);
              }
            "
            >清空购物车</a
          >
        </div>
        <div class="menu" v-for="item in cartItemsSync" :key="item.name">
          <input type="checkbox" />
          <img src="../../assets/images/西红柿.jpg" alt="" />
          <div class="product-info">
            <h3>{{ item.name }}</h3>
            <p>
              <i>¥{{ item.price }}</i>
              <s>¥{{ item.originalPrice }}</s>
            </p>
          </div>
          <div class="operate-wrapper">
            <div
              class="minus-cart operate-btn"
              @click="
                () => {
                  minusItemFromCart(shopId, item.id, item);
                }
              "
            >
              -
            </div>
            <div class="product-num">
              {{ cartList?.[shopId]?.[item.id]?.count || 0 }}
            </div>
            <div
              class="add-to-cart operate-btn"
              @click="
                () => {
                  addToCart(shopId, item.id, item);
                }
              "
            >
              +
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-footer">
      <div class="cart" @click="handleClickCart">
        <span class="iconfont cart-icon">&#xe64d;</span>
        <span class="red-dot">{{ totalCount }}</span>
        <span class="cart-info">总计：¥{{ cartItemsAmount }}</span>
      </div>
      <router-link to="/confirmorder" class="pay-btn">去结算</router-link>
    </div>
  </div>
</template>
<script>
import { ref, toRefs } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// 购物车相关逻辑
const useCartEffect = () => {
  const store = useStore();
  const { cartList } = toRefs(store.state);
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

  // 清空购物车
  const clearCart = (shopId) => {
    store.commit("clearCart", { shopId });
  };
  return { cartList, addToCart, shopId, minusItemFromCart, clearCart };
};
export default {
  // props: ["isMaskShow"],
  // 购物车总金额
  computed: {
    cartItemsAmount() {
      const shopId = this.$route.params.id;
      const cartList = this.$store.state.cartList;
      const shopObj = cartList[shopId];
      // console.log("amount-shopObj", shopObj);
      // 怎么遍历对象？
      let amount = 0; //这里不能用const啊，老兄
      for (let k in shopObj) {
        amount += shopObj[k].count * shopObj[k].price;
      }
      return amount.toFixed(2); //数字运算结果会很长，保留小数可以保证数字正常显示
    },
    cartItemsSync() {
      const shopId = this.$route.params.id;
      const cartList = this.$store.state.cartList;
      const shopObj = cartList[shopId];
      return shopObj;
    },
    totalCount() {
      const shopId = this.$route.params.id;
      const cartList = this.$store.state.cartList;
      const shopObj = cartList[shopId];
      let totalCount = 0;
      for (let k in shopObj) {
        totalCount += shopObj[k].count;
      }
      return totalCount;
    },
  },
  setup() {
    const isMaskShow = ref(false);
    const handleClickCart = () => {
      isMaskShow.value = true;
    };
    const hideCartMask = (e) => {
      // console.log(e.target);
      if (e.target == document.querySelector(".cart-mask"))
        isMaskShow.value = false;
    };
    const { cartList, addToCart, shopId, minusItemFromCart, clearCart } =
      useCartEffect();

    return {
      isMaskShow,
      handleClickCart,
      hideCartMask,
      addToCart,
      cartList,
      shopId,
      minusItemFromCart,
      clearCart,
      // products,
      // cartItemsAmount,
    };
  },
};
</script>

<style lang="scss" scoped>
#cart-preview {
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;
  .cart-mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    // height: 100%;
    bottom: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    .cart-products {
      min-height: 1rem;
      max-height: 50%;
      background: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      overflow-y: scroll;
      .cart-title {
        // position: fixed;
        // top: 0;
        // left: 0;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.18rem;
        height: 0.52rem;
        border-bottom: 1px solid #f5f5f5;
        font-size: 0.14rem;
        .check-all {
          vertical-align: middle;
        }
        .clear-cart {
          display: block;
          height: 100%;
          text-align: center;
          line-height: 0.52rem;
        }
      }
      .menu-mtop {
        margin-top: 0.52rem;
      }
      .menu {
        display: flex;
        width: 100%;
        // position: relative;
        align-items: center;
        justify-content: space-between;
        padding: 0.1rem 0.18rem;
        // height: 0.92rem;
        border-bottom: 1px solid #f5f5f5;
        img {
          width: 0.4rem;
          height: 0.4rem;
          margin: 0 0.16rem;
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
          // width: 0.4rem;
          display: flex;
          align-items: center;
          .operate-btn {
            width: 0.2rem;
            height: 0.2rem;
            border-radius: 50%;
            text-align: center;
            line-height: 0.2rem;
            font-size: 20px;
            margin-left: 0.12rem;
            vertical-align: middle;
          }
          .add-to-cart {
            background-color: #0091ff;
            color: white;
          }
          .minus-cart {
            background-color: #fff;
            border: 1px solid #666;
            color: #333;
            margin-right: 0.12rem;
          }
        }
      }
    }
  }

  .cart-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #fff;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    display: flex;

    .cart {
      position: relative;
      flex: 1;
      height: 100%;
      color: #e93b3b;
      font-size: 0.16rem;
      .cart-icon {
        font-size: 0.28rem;
        color: #4fb0f9;
        margin: 0 0.2rem;
        vertical-align: middle;
      }
      .red-dot {
        position: absolute;
        top: 0.05rem;
        left: 0.4rem;
        width: 0.15rem;
        height: 0.15rem;
        background: #e93b3b;
        color: white;
        border-radius: 50%;
        line-height: 0.15rem;
        text-align: center;
        font-size: 0.06rem;
      }
    }
    .pay-btn {
      width: 0.98rem;
      background-color: #4fb0f9;
      color: white;
      height: 100%;
      text-align: center;
    }
  }
}
</style>
