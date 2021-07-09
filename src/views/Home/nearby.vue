<template>
  <div id="nearby">
    <div class="title">
      <h2>附近店铺</h2>
    </div>
    <ul>
      <li>
        <a href="">
          <div class="img-wrapper">
            <img src="../assets/images/超市@2x.png" alt="" />
          </div>
          <div class="store-info">
            <h3>沃尔玛</h3>
            <p>
              <span>月售1万+</span><span>起送¥0</span><span>基础运费¥5</span>
            </p>
            <i>VIP尊享满89元减4元运费券（每月3张）</i>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="img-wrapper">
            <img src="../assets/images/水果店@2x.png" alt="" />
          </div>
          <div class="store-info">
            <h3>沃尔玛</h3>
            <p>
              <span>月售1万+</span><span>起送¥0</span><span>基础运费¥5</span>
            </p>
            <i>VIP尊享满89元减4元运费券（每月3张）</i>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="img-wrapper">
            <img src="../assets/images/医药健康@2x.png" alt="" />
          </div>
          <div class="store-info">
            <h3>沃尔玛</h3>
            <p>
              <span>月售1万+</span><span>起送¥0</span><span>基础运费¥5</span>
            </p>
            <i>VIP尊享满89元减4元运费券（每月3张）</i>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="img-wrapper">
            <img src="../assets/images/水果店@2x.png" alt="" />
          </div>
          <div class="store-info">
            <h3>沃尔玛</h3>
            <p>
              <span>月售1万+</span><span>起送¥0</span><span>基础运费¥5</span>
            </p>
            <i>VIP尊享满89元减4元运费券（每月3张）</i>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <div class="img-wrapper">
            <img src="../assets/images/水果店@2x.png" alt="" />
          </div>
          <div class="store-info">
            <h3>沃尔玛</h3>
            <p>
              <span>月售1万+</span><span>起送¥0</span><span>基础运费¥5</span>
            </p>
            <i>VIP尊享满89元减4元运费券（每月3张）</i>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#nearby {
  width: 100%;
  background-color: #fff;
  padding: 0 18px;
  margin-bottom: 0.48rem;
  .title {
    height: 0.4rem;
    line-height: 0.4rem;
    h2 {
      font-size: 0.18rem;
    }
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 1rem;
      a {
        display: flex;
        width: 100%;
        height: 100%;
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
            margin-top: 0.18rem;
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
    }
  }
}
</style>