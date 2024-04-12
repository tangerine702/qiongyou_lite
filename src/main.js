import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/CSS/base.css'


Vue.config.productionTip = false
//导入api并挂载到Vue原型
import api from './api/index'
Vue.prototype.$api = api


import 'normalize.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
