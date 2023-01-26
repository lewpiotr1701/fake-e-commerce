import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import ProductList from '@/views/ProductList.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product-list/:id',
    name: 'ProductDetails',
    component: () => import('@/views/ProductDetails.vue'),
    props: route => ({ id: parseInt(route.params.id) })
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: () => import('@/views/NetworkError.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
