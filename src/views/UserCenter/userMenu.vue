<template>
  <div id="user-menu">
    <ul class="usercenter-menu-list">
      <li class="usercenter-menu" v-for="item in menuLists" :key="item.text">
        <a href="">
          <div class="usercenter-menu-left">
            <span
              class="iconfont usercenter-menu-icon"
              :style="item.backgroundColor"
              v-html="item.menuicon"
            ></span>
            {{ item.text }}
          </div>
          <span class="iconfont next-arrow">&#xe62f;</span>
        </a>
      </li>
    </ul>
    <router-link class="logout" to="/login" v-show="isLogin" @click="logout"
      >退出登陆</router-link
    >
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const isLogin = store.getters.isLogin;
    const menuLists = [
      {
        menuicon: "&#xe617;",
        text: "我的钱包",
        backgroundColor: { background: "#ed4a47" },
      },
      {
        menuicon: "&#xe61f;",
        text: "我的地址",
        backgroundColor: { background: "#32c5ff" },
      },
      {
        menuicon: "&#xe635;",
        text: "客服与帮助",
        backgroundColor: { background: "#9013fe" },
      },
    ];

    const logout = () => {
      localStorage.removeItem("isLogin");
    };
    return { isLogin, menuLists, logout };
  },
};
</script>
<style lang="scss" scoped>
#user-menu {
  position: relative;
  margin: 0.2rem 0.18rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 1px 2px 6px rgba($color: #000000, $alpha: 0.12);
  .usercenter-menu-list {
    .usercenter-menu {
      height: 0.54rem;
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 0 0.16rem;
        font-size: 0.14rem;
        .usercenter-menu-icon {
          display: inline-block;
          width: 0.22rem;
          height: 0.22rem;
          border-radius: 40%;
          color: white;
          text-align: center;
          line-height: 0.22rem;
          margin-right: 0.06rem;
          font-size: 0.1rem;
        }
        .next-arrow {
          color: #c2c4ca;
        }
      }
    }
  }
  .logout {
    display: block;
    position: absolute;
    // bottom: 0.6rem;
    // left: 50%;
    width: 100%;
    height: 0.4rem;
    background: #3a6ff3;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    color: #666;
    margin-top: 0.2rem;
    text-align: center;
    line-height: 0.4rem;
    color: white;
  }
}
</style>