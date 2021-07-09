<template>
  <div id="tab-bar-vfor">
    <ul>
      <li v-for="item in tabList" :key="item.text">
        <!-- v-bind 绑定属性 -->
        <router-link :to="item.path">
          <!-- iconfont 涉及转码，使用v-html -->
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{ item.text }}</span></router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tabBarVfor",
  setup() {
    const tabList = [
      { path: "/", icon: "&#xe622;", text: "首页" },
      { path: "/cart", icon: "&#xe61d;", text: "购物车" },
      { path: "/order", icon: "&#xe797;", text: "订单" },
      { path: "/usercenter", icon: "&#xe651;", text: "我的" },
    ];
    return { tabList };
  },
};
</script>

<style lang="scss" scoped>
#tab-bar-vfor {
  width: 100%;
  height: 0.49rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  // box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgb(240, 240, 240);
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
        color: #3a6ff3;
      }
      .router-link-exact-active {
        color: #3a6ff3;
      }
    }
  }
}
</style>