import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: 'light'
  },
  getters: {
  },
  mutations: {
    TOGGLE_THEME(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    toggleTheme({ commit }, theme) {
      commit('TOGGLE_THEME', theme)
    }
  },
  modules: {
  }
})