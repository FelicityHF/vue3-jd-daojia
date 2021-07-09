import { createStore, storeKey } from 'vuex'

export default createStore({
  state: {
    // 当前用户状态
    // 默认未登陆
    // currentUser: null,
    currentUser: localStorage.currentUser,
    // isLogin: false,
    isLogin: localStorage.isLogin,
    // 购物车的数据
    cartList: {
      //数据结构：
      // 第一层
      // shopId: {
      // 第二层
      //   productId:{
      //      id:1,
      //      name:'番茄250g/份'
      //   }
      // }
    }
  },
  getters: {
    // 获取属性的状态
    currentUser: state => state.currentUser,
    isLogin: state => state.isLogin
  },
  mutations: {
    userStatus(state, user) {
      if (user) {
        state.currentUser = user;
        // 测试 localStorage
        localStorage.isLogin = true;
        localStorage.currentUser = user;
      } else {
        state.currentUser = null;
        localStorage.removeItem('isLogin');
        localStorage.currentUser = null;
      }
    },
    // 购物车
    // 🎈🌟接收购物车传过来的参数
    addItemToCart(state, payload) {
      const { shopId, productId, productData } = payload;
      let shopObj = state.cartList[shopId];
      // shopId应该是一个对象，里面存储加入购物车的商品，但第一次它还没创建
      if (!shopObj) shopObj = {};
      // state.cartList[shopId] = shopInfo;
      let productObj = shopObj[productId];
      if (!productObj) {
        // productData本身就是一个object
        productObj = productData;
        productObj.count = 0;
      }
      productObj.count++;
      state.cartList[shopId] = shopObj;
      shopObj[productId] = productObj;

      // id, name, price等这些数据，在productData赋值给productObj时，一切就有了，不用重复赋值
      // productObj.id = productData.id;
      // productObj.name = productData.name;
      // productObj.price = productData.price;
      // productObj.sales = productData.sales;
      // productObj.originalPrice = productData.originalPrice;
      console.log('state里的cartList数据', state.cartList);
    },
    // 从购物车删除商品
    minusItemFromCart(state, payload) {
      // console.log(state, payload);
      const { shopId, productId } = payload;
      const productObj = state.cartList[shopId][productId];
      if (productObj.count <= 1) { //数量减到1，下次再点击-，就直接删除商品了
        // 从shopObj里把此productId的对象删除
        delete state.cartList[shopId][productId];
      } else if (productObj.count > 0)
        productObj.count--;
    },
    // 清空购物车
    clearCart(state, payload) {
      const { shopId } = payload;
      delete state.cartList[shopId];
    }
  },
  actions: {
    setUser(context, user) {
      context.commit("userStatus", user);
    }
  },
  modules: {
  }
})
