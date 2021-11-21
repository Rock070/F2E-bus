
export default {
  namespaced: true,
  state: {
    theme: {},
  },
  mutations: {
    setTheme (state, payload) {
      state.theme = payload
    },
  },
  actions: {
    setTheme ({ commit }, param) {
      commit('setTheme', param)
    },
  },
}
