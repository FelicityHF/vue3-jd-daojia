import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
  },
  {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop/Shop.vue'),
    children: [
      // { path: 'products', component: () => import(/*webpackChunkName: 'tabmenu' */ '../views/Shop/tabMenu.vue') }
    ]
  },
  {
    path: '/confirmorder',
    name: 'confirmOrder',
    component: () => import(/* webpackChunkName: "confirmorder" */ '../views/ConfirmOrder/confirmOrder.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart/Cart.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order/Order.vue')
  },
  {
    path: '/usercenter',
    name: 'UserCenter',
    component: () => import(/* webpackChunkName: "usercenter" */ '../views/UserCenter/UserCenter.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue'),
    // 访问login页面之前才会执行
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin;
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register/Register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: history,
  routes
})
// 导航守卫
// 实现未登陆不能进首页
// 全局路由守卫，不管什么路由切换时都会执行
// router.beforeEach((to, from, next) => {
//   const isLogin = JSON.parse(localStorage.isLogin);//从本地存储里取login状态
//   // const isLogin = false;
//   // console.log(isLogin);
//   if (!isLogin && (to.name !== 'Login') && (to.name !== 'Register')) {
//     next({ name: 'Login' });
//   } else {
//     next()
//   }
// })
router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' });
})

export default router
