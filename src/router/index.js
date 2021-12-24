import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home ,meta:{needLogin:true}},//needLogin判断是否需要登录才可以进入
    { path: '/home', component: Home ,meta:{needLogin:true}},
    { path: '/login', component: Login },
  ]
})


