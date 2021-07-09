<template>
  <div id="user-head">
    <div class="userinfo-card">
      <div class="avator-img-wrapper">
        <img class="user-avator" src="../../assets/images/鲜花@2x.png" alt="" />
      </div>
      <router-link class="current-user-name" to="/login" v-show="!isLogin"
        >登陆</router-link
      >
      <p class="current-user-name" v-show="isLogin">
        当前用户：{{ currentUser }}
      </p>
      <span class="user-id">ID:10789783899</span>
      <div class="user-personal-info">
        <div class="red-money">
          红包
          <p>218</p>
        </div>
        <div class="red-money">
          优惠券
          <p>218</p>
        </div>
        <div class="red-money">
          鲜豆
          <p>218</p>
        </div>
        <div class="red-money">
          白条
          <p>218</p>
        </div>
      </div>
    </div>
    <div class="linear-bg"></div>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currentUser = store.getters.currentUser;
    const isLogin = store.getters.isLogin;
    return { currentUser, isLogin };
  },
};
</script>
<style lang="scss" scoped>
#user-head {
  width: 100%;
  position: relative;
  height: 3rem;
  overflow: hidden;
  .userinfo-card {
    position: absolute;
    top: 0.9rem;
    left: 0.18rem;
    right: 0.18rem;
    background-color: #fff;
    border-radius: 4px;
    height: 2.03rem;
    box-shadow: 2px 3px 4px rgba($color: #000000, $alpha: 0.1);
    text-align: center;
    .avator-img-wrapper {
      position: absolute;
      top: -0.47rem;
      left: 50%;
      transform: translateX(-50%);
      width: 0.94rem;
      height: 0.94rem;
      border-radius: 50%;
      overflow: hidden;
      img.user-avator {
        width: 100%;
      }
    }
    .current-user-name {
      display: block;
      font-size: 0.18rem;
      margin-top: 0.6rem;
      margin-bottom: 0.1rem;
    }
    .user-id {
      color: #999;
    }
    .user-personal-info {
      position: absolute;
      bottom: 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      border-top: 1px solid #f5f5f5;
      padding: 0.2rem 0.28rem;
      div.red-money {
        white-space: nowrap;
        color: #999;
        p {
          font-size: 0.18rem;
          margin-top: 0.1rem;
          font-weight: 700;
          color: #333;
        }
      }
    }
  }
  .linear-bg {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 2.5rem;
    background-image: linear-gradient(-80deg, #3a6ff3 40%, #50c7fb);
    border-bottom-left-radius: 80%;
    border-bottom-right-radius: 80%;
    z-index: -1;
  }
}
</style>