<template>
  <div id="order-history">
    <div class="order-card" v-for="item in orders" :key="item.orderAmount">
      <div class="order-card-title">
        <h3 class="shop-name">{{ item.shopName }}</h3>
        <span class="order-status">{{ item.orderStatus }}</span>
      </div>
      <div class="order-items">
        <div class="items-imgs">
          <img src="../../assets/images/西红柿.jpg" alt="" />
          <img src="../../assets/images/西红柿.jpg" alt="" />
          <img src="../../assets/images/西红柿.jpg" alt="" />
        </div>
        <div class="items-sum">
          <i class="items-amount">¥{{ item.orderAmount }}</i>
          <p class="items-quantity">共{{ item.orderQuanti }}件</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    const orders = [
      {
        shopName: "沃尔玛",
        orderStatus: "已完成",
        orderAmount: 66.9,
        orderQuanti: 6,
      },
      {
        shopName: "华润万家",
        orderStatus: "已取消",
        orderAmount: 66.9,
        orderQuanti: 10,
      },
      {
        shopName: "百佳永辉",
        orderStatus: "已完成",
        orderAmount: 166.9,
        orderQuanti: 20,
      },
    ];
    return { orders };
  },
};
</script>
<style lang="scss" scoped>
#order-history {
  .order-card {
    margin: 0.14rem 0.18rem;
    padding: 0.16rem;
    background: #fff;
    border-radius: 4px;
    height: 1.1rem;
    &-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.16rem;
      .order-status {
        color: #666;
        font-weight: 700;
      }
    }
    .order-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .items-imgs {
        img {
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          margin-right: 0.06rem;
          vertical-align: bottom;
        }
      }
      .items-sum {
        line-height: 0.2rem;
        text-align: right;
        font-size: 0.12rem;
        .items-amount {
          font-style: normal;
          color: red;
          margin-bottom: 0.06rem;
          font-size: 0.14rem;
        }
      }
    }
  }
}
</style>