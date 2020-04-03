import Vue from 'vue'
import App from './App.vue'
import router from './index.js'
import './plugins/element.js'
//导入全局样式
import './assets/css/global.css'
import axios from 'axios'
//配置请求的跟路径
axios.defaults.baseURL ='http://106.12.11.162:8888/api/private/v1/'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
