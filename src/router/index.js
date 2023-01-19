import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
