<template>
  <div id="tab-bar">
    <ul>
      <li>
        <router-link to="/">
          <i class="iconfont icon-index-copy"></i>
          <span>首页</span></router-link
        >
      </li>
      <li>
        <router-link to="/cart">
          <i class="iconfont icon-gouwudai"></i>
          <span>购物车</span></router-link
        >
      </li>
      <li>
        <router-link to="/order">
          <i class="iconfont icon-order"></i>
          <span>订单</span></router-link
        >
      </li>
      <li>
        <router-link to="/usercenter">
          <i class="iconfont icon-wode"></i> <span>我的</span></router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  components: {},
  setup() {},
};
</script>

<style lang="scss" scoped>
#tab-bar {
  width: 100%;
  height: 0.49rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  ul {
    display: flex;
    height: 100%;
    li {
      width: 25%;
      height: 100%;
      a {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.1rem;
        .iconfont {
          font-size: 0.2rem;
          margin-bottom: 5px;
        }
      }
      .router-link-active {
        color: rgb(89, 74, 247);
      }
      .router-link-exact-active {
        color: rgb(89, 74, 247);
      }
    }
  }
}
</style>