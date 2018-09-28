import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Detail from '@/components/goodsDetail'
import Search from '@/components/searchFood'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goodsDetail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
