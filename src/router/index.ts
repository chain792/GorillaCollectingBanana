import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from '../pages/Home.vue'

const Play = () => import('../pages/Play.vue')
const Play2 = () => import('../pages/Play2.vue')
const Play3 = () => import('../pages/Play3.vue')

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
  },
  {
    path: '/play2',
    name: 'Play2',
    component: Play2
  },
  {
    path: '/play3',
    name: 'Play3',
    component: Play3
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router