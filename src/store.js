import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: ''
  },
  actions: {
    setUser: ({ commit }, data) => {
      commit('setUser', data)
    }
  },
  mutations: {
    setUser (state, data) {
      state.userInfo = data
    }
  }
})
