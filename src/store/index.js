import { createStore } from 'vuex'
import ProductService from '@/services/ProductService.js'

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
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The client never received a response, and the request was never left
        } else {
          // Anything else
        }
      }
    },
    async getProduct({ commit }, id) {
      try {
        const res = await ProductService.getProduct(id)
        console.log(res)
        const product = res.data.products[0]
        commit('SET_PRODUCT', product)
      } catch (err) {
        if (err.response) {
          // The client was given an error response (5xx, 4xx)
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else if (err.request) {
          // The client never received a response, and the request was never left
        } else {
          // Anything else
        }
      }
    }
  },
  modules: {
  }
})