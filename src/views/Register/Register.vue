<template>
  <div id="register">
    <img src="../../assets/images/编组@2x.png" alt="" />
    <form @submit.prevent="onSubmit">
      <input
        type="number"
        placeholder="请输入手机号"
        maxlength="11"
        v-model="phone"
      />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <input type="password" placeholder="确认密码" v-model="repassword" />
      <input class="submit-btn" value="注册" type="submit" />
    </form>
    <router-link to="/login">已有账号去登陆</router-link>
    <toast v-show="isToastShow" v-bind:toastMsg="toastMsg"></toast>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import toast, { useToastEffect } from "../../components/toast.vue";
export default {
  name: "Register",
  components: { toast },
  setup() {
    const data = reactive({
      phone: "",
      password: "",
      repassword: "",
    });
    const { isToastShow, toastMsg, showToast } = useToastEffect();
    const router = useRouter();
    const onSubmit = () => {
      //把通过格式校验的表单数据放到一个formData对象里
      let formData = {};
      if (data.password !== "" && data.password === data.repassword) {
        formData.phone = data.phone;
        formData.password = data.password;
        console.log(formData); //{phone: "888", password: "123"}
        //   然后把formData post到服务器
        axios.post("/accounts.json", formData).then(() => {
          // 然后跳转到登陆页面
          router.push({ path: "/login" });
        });
      } else {
        showToast("密码输入不一致");
      }
    };
    // 使用toRefs()搭配展开语法，将data里值解开约束，在html标签里就可以直接使用里面的数据，不需要加data前缀了
    return { ...toRefs(data), onSubmit, isToastShow, toastMsg };
  },
};
</script>

<style lang="scss" scoped>
#register {
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
}
</style>