<template>
  <div id="toast">{{ toastMsg }}</div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "toast",
  props: {
    toastMsg: String,
  },
  setup() {},
};
// 把toast相关的数据和方法拆分到一个代码块里，并用export 导出，在使用的地方import这个函数
export const useToastEffect = () => {
  const toastData = reactive({
    isToastShow: false,
    toastMsg: "",
  });
  const showToast = (message) => {
    toastData.toastMsg = message;
    toastData.isToastShow = true;
    setTimeout(() => {
      toastData.isToastShow = false;
      toastData.toastMsg = "";
    }, 3000);
  };
  return { ...toRefs(toastData), showToast };
};
</script>
<style lang="scss" scoped>
#toast {
  width: 1rem;
  height: 0.3rem;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 50%;
  bottom: 0.5rem;
  transform: translateX(-50%);
  color: white;
  line-height: 0.3rem;
}
</style>