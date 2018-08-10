// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


/*https://www.cnblogs.com/zhangruiqi/p/9062005.html webpack配置详解*/ 
/**公共样式*/ 
import '../static/css/reset.css'
/**兼容各种终端*/ 
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
