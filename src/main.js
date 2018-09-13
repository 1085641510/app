// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// function IsPC() {
//     var userAgentInfo = navigator.userAgent;
//     var Agents = ["Android", "iPhone",
//                 "SymbianOS", "Windows Phone",
//                 "iPad", "iPod"];
//     var flag = true;
//     for (var v = 0; v < Agents.length; v++) {
//         if (userAgentInfo.indexOf(Agents[v]) > 0) {
//             flag = false;
//             break;
//         }
//     }
//     return flag;
// }
 

/**解决cliclk延迟*/
import fastclick from 'fastclick'
fastclick.attach(document.body)
 
/*https://www.cnblogs.com/zhangruiqi/p/9062005.html webpack配置详解*/ 

import 'font-awesome/css/font-awesome.css'
/**兼容各种终端*/ 
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

/**components*/

import compontents from '@/common/components' 
Vue.use(compontents)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
