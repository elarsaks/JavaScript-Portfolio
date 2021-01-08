import Vue from 'vue'
import Vuex from 'vuex'
import repository from '../repository/Names.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    names: [],
    loading: false,
  },
  mutations: {
    setLoading(state) {
      state.loading = !state.loading
    },
    setNames(state, names) {
      state.names = names
    },
  },
  actions: {
    getNames({ commit }, params) {
      commit('setLoading')
      repository
        .getNames(params)
        .then(data => commit('setNames', data))
        .then(() => commit('setLoading'))
    },
  },
})
