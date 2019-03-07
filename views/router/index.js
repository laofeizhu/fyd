import Vue from 'vue'
import Router from 'vue-router'

import univsPage from '../pages/univs.vue'
import homePage from '../pages/home.vue'

Vue.use(Router)

const router = new Router ({
  root: '/home',
  routes: 
  [
    {
      path: '/univs',
      name: 'univs',
      component: univsPage
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router