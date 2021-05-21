import Vue from 'vue'
import VueRouter from 'vue-router'
import { homeRoute } from './home'
import { postRoute } from './post'
import { categoryRoute } from './category'

Vue.use(VueRouter)

const routes = [
  ... homeRoute,
  ... categoryRoute,
  ... postRoute  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router