import User from '../../api/user'
export default {
  namespaced: true,
  state: () => ({
    token: '' || localStorage.getItem('token')
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', state.token)
    }
  },
  actions: {
    async login({ commit }, payload) {
      const response = await User.login(payload)
      const token = response.token
      commit('setToken', token)
    }
  }
}
