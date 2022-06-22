import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '../pages/Home.vue'

const Play = () => import('../pages/Play.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router