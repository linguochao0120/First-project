// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import axios from 'axios'
import store from './store'

Vue.use(ElementUI)   //新添加
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
if(process.env.NODE_ENV !=='production') require('./mock/mock.js')
/* eslint-disable no-new */
router.beforeEach((to,from,next)=> {
  if(to.meta.needLogin) {
    //当页面需要登陆的时候，判断浏览器是否有sessionStoragex
    if(window.sessionStorage.data) {
      next()
    }else{
      next('/login')
    }
  }else{
      next()
    }
    }
    )
  
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
