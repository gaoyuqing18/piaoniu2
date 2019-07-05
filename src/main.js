import router from './router'
import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.styl'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
 //入口文件挂载到 index.html中
 //index.html文件有一个<div id='app'></div>标签
