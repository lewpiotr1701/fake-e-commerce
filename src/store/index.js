import { createStore } from 'vuex'
import ProductService from '@/services/ProductService.js'
import router from '../router'

export default createStore({
  state: {
    theme: 'light',
    products: [],
    product: {}
  },
  getters: {
  },
  mutations: {
    TOGGLE_THEME(state, theme) {
      state.theme = theme
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCT(state, product) {
      state.product = product
    }
  },
  actions: {
    toggleTheme({ commit }, theme) {
      commit('TOGGLE_THEME', theme)
    },
    async getProducts({ commit }) {
      try {
        const res = await ProductService.getProducts()
        const products = res.data.products
        commit('SET_PRODUCTS', products)
      } catch (err) {
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log(err.response)
          router.push({ name: 'NotFound' })
        } else if (err.request) {
          // The client never received a response, and the request was never left
          console.log(err.request)
        } else {
          // Anything else
          console.log(err)
        }
      }
    },
    async getProduct({ commit }, id) {
      try {
        const res = await ProductService.getProduct(id)
        const product = res.data
        commit('SET_PRODUCT', product)
      } catch (err) {
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log(err.response)
          router.push({ name: 'NotFound' })
        } else if (err.request) {
          // The client never received a response, and the request was never left
          console.log(err.request)
        } else {
          // Anything else
          console.log(err)
        }
      }
    }
  },
  modules: {
  }
})