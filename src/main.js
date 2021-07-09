import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css'
import './style/index.scss'
import 'babel-polyfill'

//配置全局默认路径
axios.defaults.baseURL = "https://my-blog-vue-f75d7-default-rtdb.asia-southeast1.firebasedatabase.app"

createApp(App).use(store).use(router).mount('#app')
