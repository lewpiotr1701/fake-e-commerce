import { createStore } from 'vuex'

export default createStore({
  state: {
    isDrawer: false,
    theme: 'light'
  },
  getters: {
  },
  mutations: {
    TOGGLE_THEME(state, theme) {
      state.theme = theme
    },
    TOGGLE_DRAWER(state, isDrawer) {
      state.isDrawer = isDrawer
    }
  },
  actions: {
    toggleTheme({ commit }, theme) {
      commit('TOGGLE_THEME', theme)
    },
    toggleDrawer({ commit }, isDrawer) {
      commit('TOGGLE_DRAWER', isDrawer)
    }
  },
  modules: {
  }
})