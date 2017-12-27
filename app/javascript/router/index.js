import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import HomeRoutes from './home'
import DetailsRoutes from './details'

Vue.use(Router)

export default new Router({
  routes: [
    HomeRoutes,
    DetailsRoutes,
  ]
})
