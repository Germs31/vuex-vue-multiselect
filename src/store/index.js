import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    value: '',
    options: ['whiskey', 'gin', 'vodka', 'tequila', 'rum']
  },
  mutations: {
    updateValue(state, value) {
      state.value = value
    }
  },
  actions: {
    updateValueAction ({commit}, value) {
      commit('updateValue', value)
    }
  },
})
