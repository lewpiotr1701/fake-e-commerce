import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import About from '../views/About.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetails from '../views/ProductDetails.vue'

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
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product-list/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
