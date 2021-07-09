<template>
  <div id="loginxx">
    <!-- <h1>登陆</h1> -->
    <img src="../assets/images/编组@2x.png" alt="" />
    <form @submit.prevent="onSubmit">
      <input
        type="number"
        placeholder="请输入手机号"
        maxlength="11"
        v-model="data.phone"
      />
      <input type="password" placeholder="请输入密码" v-model="data.password" />
      <input class="submit-btn" value="登陆" type="submit" />
    </form>
    <router-link to="/register">立即注册</router-link>|
    <router-link to="/register">忘记密码</router-link>
    <toast v-show="data.isToastShow" v-bind:toastMsg="data.toastMsg"> </toast>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Toast from "../components/toast.vue";

export default {
  name: "Login",
  components: { Toast },
  // 学习使用Vue3的组合式API吧，纳旧迎新
  setup() {
    // const phone = ref(""),
    //   password = ref("");
    // const isToastShow = ref(false);
    // const toastMsg = ref("");
    // 把所有的数据放在一个data里，方便管理
    const data = reactive({
      phone: "",
      password: "",
      isToastShow: false,
      toastMsg: "",
    });
    const router = useRouter();
    const store = useStore();

    const showToast = (message) => {
      data.toastMsg = message;
      data.isToastShow = true;
      setTimeout(() => {
        data.isToastShow = false;
        data.toastMsg = "";
      }, 3000);
    };
    const onSubmit = () => {
      axios
        .get("/accounts.json")
        .then((response) => {
          const accountsArr = [];
          for (let k in response.data) {
            accountsArr.push(response.data[k]);
          }
          console.log(accountsArr); //前端校验：所有的账户数据都放在了这个数组里，如果账户特别多，这个数组没有问题？？比如微信级别的
          // 📶🍎实际开发中可能的验证方法，使用post请求，把用户输入的账号和密码放在一个对象里，发送到后端，后端来做验证
          // [
          //  {password: "123", phone: "888"}
          //  {password: "123", phone: "999"}
          // ]
          // 筛选匹配账户
          let accountObj = accountsArr.filter((item) => {
            return (
              // phone.value === item.phone && password.value === item.password
              data.phone === item.phone && data.password === item.password
            );
          });
          console.log(accountObj);
          if (accountObj !== null && accountObj.length > 0) {
            //账户验证通过的条件
            // 这里还要设置以下登陆状态,待补充
            store.dispatch("setUser", accountObj[0].phone);
            //登陆成功，跳转到用户中心，原来的登陆按钮消失，要把当前登陆的用户名带出来
            router.push({ path: "/usercenter" });
          } else {
            // alert("账号或密码错误");
            showToast("账号或密码错误");
          }
        })
        .catch((e) => {
          console.log(e);
          // data.toastMsg = "请求失败";
          // data.isToastShow = true;
          // setTimeout(() => {
          //   data.isToastShow = false;
          //   data.toastMsg = "";
          // }, 3000);
          showToast("请求失败");
        });
    };

    return {
      data,
      onSubmit,
    };
  },
  // 下面是以往思路实现的功能
  // data() {
  //   return {
  //     phone: "",
  //     password: "",
  //   };
  // },
  // 导航守卫，退出登录后需要清空之前的数据???
  beforeRouteEnter: (to, from, next) => {
    next((vm) => vm.$store.dispatch("setUser", null));
  },
  // methods: {
  //   onSubmit() {
  //     axios
  //       .get(
  //         "https://my-blog-vue-f75d7-default-rtdb.asia-southeast1.firebasedatabase.app/accounts.json"
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         console.log(response.data); //data对象
  //         // data:{
  //         // -MdaCz3hRPZd4CxfmrQG: {password: "123", phone: "888"}
  //         // -MdaF8OyoxxbDxAzCvnm: {password: "123", phone: "999"}
  //         // }
  //         const accountsArr = [];
  //         for (let k in response.data) {
  //           accountsArr.push(response.data[k]);
  //         }
  //         console.log(accountsArr); //所有的账户数据都放在了这个数组里，如果账户特别多，这个数组没有问题？？比如微信级别的
  //         // [
  //         //  {password: "123", phone: "888"}
  //         //  {password: "123", phone: "999"}
  //         // ]
  //         // 筛选匹配账户
  //         let accountObj = accountsArr.filter((item) => {
  //           return this.phone === item.phone && this.password === item.password;
  //         });
  //         console.log(accountObj);
  //         if (accountObj !== null && accountObj.length > 0) {
  //           //账户验证通过的条件
  //           // 这里还要设置以下登陆状态,待补充
  //           // 。。。。
  //           this.$store.dispatch("setUser", accountObj[0].phone);
  //           //登陆成功，跳转到用户中心，原来的登陆按钮消失，要把当前登陆的用户名带出来
  //           this.$router.push({ path: "/usercenter" });
  //         } else {
  //           alert("账号或密码错误");
  //         }
  //       });
  //   },
  // },
};
</script>

<style lang="scss" scoped>
#login {
  background: #fff;
  height: 100vh;
  text-align: center;
  padding: 0 0.4rem;
  img {
    width: 0.66rem;
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      height: 0.48rem;
      margin-bottom: 0.16rem;
      background: #f9f9f9;
      border-radius: 4px;
      border: 1px solid #ccc;
      outline: none;
      padding: 0 0.16rem;
      font-size: 0.16rem;
    }
    .submit-btn {
      background: #0091ff;
      box-shadow: 0 4px 8px rgba(#0091ff, 0.3);
      border: none;
      margin-top: 0.16rem;
      color: white;
    }
  }
  a {
    margin: 0 10px;
  }
}
</style>