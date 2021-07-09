<template>
  <div id="head-bar">
    <div class="title-bar">
      <div class="location">
        <i class="iconfont">&#xe610;</i>
        点击定位城市位置点击定位城市位置点击定位城市位置点击定位城市位置点击定位城市位置点击定位城市位置
      </div>
      <div class="notification"><i class="iconfont">&#xe637;</i></div>
    </div>
    <div class="search-bar">
      <div class="input-wrapper">
        <input type="text" placeholder="山姆会员店优惠商品" />
        <i class="iconfont">&#xe643;</i>
      </div>
    </div>
    <div class="banner">
      <img src="../../assets/images/banner.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#head-bar {
  width: 100%;
  // height: 1.84rem;
  background-color: #fff;
  padding: 0 18px;

  .title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.54rem;
    width: 100%;
    .iconfont {
      font-size: 0.2rem;
    }
    .location {
      flex: 1;
      font-size: 0.14rem;
      white-space: nowrap;
      overflow: hidden;
      margin-right: 0.1rem;
      text-overflow: ellipsis;
      .notification {
        width: 0.2rem;
      }
    }
  }
  .search-bar {
    height: 0.32rem;
    margin-bottom: 0.12rem;
    .input-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0 0.16rem;
      border-radius: 20px;
      background-color: #f5f5f5;
      overflow: hidden;
      .iconfont {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.16rem;
        color: #b7b7b7;
        font-size: 0.2rem;
      }
      input {
        margin-left: 0.28rem;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background-color: #f5f5f5;
        font-size: 0.14rem;
        padding: 0 10px 0 2px;
        &::placeholder {
          color: #b7b7b7;
        }
      }
    }
  }
  .banner {
    // height: 0.86rem;
    height: 0;
    overflow: hidden;
    padding-bottom: 25%;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }
}
</style>