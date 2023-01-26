import { createStore } from 'vuex'
import ProductService from '@/services/ProductService.js'
import router from '../router'

export default createStore({
  state: {
    isLoading: false,
    theme: 'light',
    products: [],
    product: {}
  },
  getters: {
  },
  mutations: {
    TOGGLE_LOADING(state) {
      state.isLoading = !state.isLoading
    },
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
    toggleLoading({ commit }) {
      commit('TOGGLE_LOADING')
    },
    toggleTheme({ commit }, theme) {
      commit('TOGGLE_THEME', theme)
    },
    async getProducts({ commit }) {
      commit('TOGGLE_LOADING')
      try {
        const res = await ProductService.getProducts()
        const products = res.data.products
        commit('SET_PRODUCTS', products)
      } catch (err) {
        if (err.response && err.response.status == 404) {
          router.push({ name: 'NotFound' })
        } else {
          router.push({ name: 'NetworkError' })
        }
      } finally {
        commit('TOGGLE_LOADING')
      }
    },
    async getProduct({ commit, state }, id) {
      const existingProduct = state.products.find(
        product => product.id === id
      )
      if (existingProduct) {
        commit('SET_PRODUCT', existingProduct)
      } else {
        try {
          const res = await ProductService.getProduct(id)
          const product = res.data
          commit('SET_PRODUCT', product)
        } catch (err) {
          if (err.response && err.response.status == 404) {
            router.push({ name: 'NotFound' })
          } else {
            router.push({ name: 'NetworkError' })
          }
        }
      }

    }
  },
  modules: {
  }
})