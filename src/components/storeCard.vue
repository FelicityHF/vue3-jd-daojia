<template>
  <div id="store-card">
    <div class="store-wrapper">
      <div class="img-wrapper">
        <img src="../assets/images/超市@2x.png" alt="" />
      </div>
      <div class="store-info">
        <h3>{{ item.name }}</h3>
        <p>
          <span>月销{{ item.sales }}</span
          ><span>起送{{ item.basis }}</span
          ><span>基础运费{{ item.express }}</span>
        </p>
        <i>{{ item.slogan }}</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeCard",
  props: ["item"],
  setup() {},
};
</script>

<style lang="scss" scoped>
.store-wrapper {
  width: 100%;
  height: 1rem;
  display: flex;
  .img-wrapper {
    width: 0.56rem;
    margin-right: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  .store-info {
    flex: 1;
    font-size: 0.13rem;
    border-bottom: 1px solid #f1f1f1;
    h3 {
      font-size: 0.16rem;
      margin-bottom: 0.08rem;
      margin-top: 0.2rem;
    }
    p {
      margin-bottom: 0.08rem;
      span {
        margin-right: 0.16rem;
      }
    }

    i {
      font-style: normal;
      color: #e93b3b;
    }
  }
}
</style>