import Vue from 'vue'
import Vuex from 'vuex'
import repository from '../repository/Names.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
    names: [],
    loading: false,
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    setLoading(state) {
      state.loading = !state.loading
    },
    setNames(state, names) {
      state.names = names
    },
  },
  actions: {
    getNames({ commit }, params) {
      // Set error to null, if last call returned error
      commit('setError', null)
      commit('setLoading')

      repository
        .getNames(params)
        .then(data => commit('setNames', data))
        .then(() => commit('setLoading'))
        .catch(err => commit('setError', err))
    },
  },
})
