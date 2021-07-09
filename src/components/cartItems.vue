<template>
  <div id="cart-items">
    <h3>shopName</h3>
    <div class="product-info">
      <div class="product-desc">
        <img src="../assets/images/西红柿.jpg" alt="" />
        <div class="product-title">
          product title
          <p>¥price x num</p>
        </div>
      </div>
      <span class="total-amount">¥totalAmount</span>
    </div>
    <div class="product-info">
      <div class="product-desc">
        <img src="../assets/images/西红柿.jpg" alt="" />
        <div class="product-title">
          product title
          <p>¥price x num</p>
        </div>
      </div>
      <span class="total-amount">¥totalAmount</span>
    </div>

    <div class="fold-btn">
      共计count件/totalWeightkg
      <span class="iconfont fold-icon">&#xe69b;</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#cart-items {
  background: #fff;
  padding: 0.2rem 0.16rem;
  margin: 0.16rem 0.18rem;
  height: 2.22rem;
  border-radius: 4px;
  h3 {
    margin-bottom: 0.2rem;
  }
  .product-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.2rem;
    .product-desc {
      display: flex;
      img {
        width: 0.4rem;
        height: 0, 4rem;
        margin-right: 0.16rem;
      }
      .product-title {
        font-size: 0.14rem;
        align-self: flex-start;
        p {
          color: red;
          margin-top: 0.1rem;
        }
      }
    }
  }
  .fold-btn {
    background-color: #f5f5f5;
    height: 0.28rem;
    color: #666;
    line-height: 0.28rem;
    text-align: center;
    .fold-icon {
      vertical-align: middle;
    }
  }
}
</style>