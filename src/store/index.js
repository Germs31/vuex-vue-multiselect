import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: [],
    options: []
  },
  mutations: {
    updateOptions(state, value) {
      state.options = value
    },
    resetOptions(state) {
      state.options = []
    }
  },
  actions: {
    updateOptionsAction ({commit}, value) {
      commit('updateOptions', value)
    },
    resetOptionsAction({commit}) {
      commit('resetOptions')
    }
  },
})
