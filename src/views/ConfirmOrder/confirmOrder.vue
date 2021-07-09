<template>
  <div id="confirm-order">
    <header class="confirm-order__header">
      <nav class="nav-bar">
        <span @click="clickToBack" class="iconfont nav-back-icon"
          >&#xe656;</span
        >
        确认订单
      </nav>
      <div class="order-address">
        <h3>收货地址</h3>
        <p>深圳市龙华新区民治街道万家灯火</p>
        <p class="address-person">
          放飞 <span class="address-phone">1789888888</span>
        </p>
        <span class="iconfont next-arrow">&#xe62f;</span>
      </div>
    </header>
    <cart-items></cart-items>
    <div class="order-footer">
      <span class="total-pay">实付金额： <i> ¥totalPay</i></span>
      <router-link to="/confirmorder" class="submit-order-btn"
        >提交订单</router-link
      >
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import cartItems from "../../components/cartItems.vue";
export default {
  name: "confirmOrder",
  components: { cartItems },

  computed: {
    getShopName() {
      
      return shopName;
    },
  },
  setup() {
    const router = useRouter();
    const clickToBack = () => {
      router.back();
    };

    return { clickToBack };
  },
};
</script>
<style lang="scss" scoped>
#confirm-order {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .confirm-order__header {
    background-image: linear-gradient(180deg, #0091ff 20%, #f5f5f5);
    .nav-bar {
      position: relative;
      height: 0.64rem;
      line-height: 0.64rem;
      color: white;
      font-size: 0.16rem;
      padding: 0 0.18rem;
      text-align: center;
      .nav-back-icon {
        position: absolute;
        left: 0.18rem;
      }
    }
    .order-address {
      position: relative;
      height: 1.1rem;
      margin: 0 0.18rem;
      border-radius: 4px;
      padding: 0.2rem 0.16rem;
      background: #fff;
      font-size: 0.14rem;
      // box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      h3 {
        margin-bottom: 0.14rem;
        font-size: 0.16rem;
      }
      .address-person {
        margin-top: 0.06rem;
        color: #666;
        font-size: 0.12rem;
      }
      .next-arrow {
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .order-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #fff;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    padding-left: 0.18rem;
    font-size: 0.14rem;
    .total-pay {
      i {
        font-style: normal;
        font-weight: 700;
      }
    }
    .submit-order-btn {
      width: 0.98rem;
      background-color: #4fb0f9;
      color: white;
      height: 100%;
      text-align: center;
    }
  }
}
</style>