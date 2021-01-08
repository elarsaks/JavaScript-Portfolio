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
      commit('setLoading')
      repository
        .getNames(params)
        .then(data => commit('setNames', data))
        .then(() => {
          // TODO: test error handling
          commit('setError', null)
          commit('setLoading')
        })
        .catch(err => {
          console.log(err)
          commit('setError', err)
        })
    },
  },
})
