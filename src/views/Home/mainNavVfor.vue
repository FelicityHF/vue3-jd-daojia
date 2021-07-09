<template>
  <div id="main-nav">
    <ul>
      <li v-for="item in navs" :key="item.title">
        <!-- src用v-bind绑定了属性，就可以使用JS表达式了 -->
        <a :href="item.path"
          ><img
            :src="`http://www.dell-lee.com/imgs/vue3/${item.img}.png`"
            alt=""
          />
          <p>{{ item.title }}</p></a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mainNavVfor",
  setup() {
    const navs = [
      {
        path: "/navlink",
        img: "超市",
        title: "超市便利",
      },
      {
        path: "/navlink",
        img: "菜市场",
        title: "菜市场",
      },
      {
        path: "/navlink",
        img: "水果店",
        title: "水果店",
      },
      {
        path: "/navlink",
        img: "鲜花",
        title: "鲜花绿植",
      },
      {
        path: "/navlink",
        img: "医药健康",
        title: "医药健康",
      },
      {
        path: "/navlink",
        img: "家居",
        title: "家居",
      },
      {
        path: "/navlink",
        img: "蛋糕",
        title: "烘培蛋糕",
      },
      {
        path: "/navlink",
        img: "签到",
        title: "签到",
      },
      {
        path: "/navlink",
        img: "大牌免运",
        title: "大牌免运",
      },
      {
        path: "/navlink",
        img: "红包",
        title: "红包",
      },
    ];
    return { navs };
  },
};
</script>

<style lang="scss" scoped>
#main-nav {
  width: 100%;
  height: 1.74rem;
  background-color: #fff;
  padding: 0.16rem 0.18rem;
  margin-bottom: 0.1rem;
  ul {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    align-content: space-around;
    li {
      width: 20%;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 0.4rem;
        }
        p {
          margin-top: 0.06rem;
          font-size: 0.12rem;
        }
      }
    }
  }
}
</style>