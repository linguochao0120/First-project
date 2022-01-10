import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Meeting from '@/pages/meeting'
import MeetingSearch from '@/pages/meetingsearch'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home ,meta:{needLogin:true}},//needLogin判断是否需要登录才可以进入
    { path: '/home', component: Home ,meta:{needLogin:true}},
    { path: '/login', component: Login },
    { path:'/meeting',name:Meeting, component: Meeting},
    { path:'/meetingsearch',name: MeetingSearch, component: MeetingSearch},
  ]
})


