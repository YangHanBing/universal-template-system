import User from '../../api/user'
import {
  setItem,
  getItem,
  removeItem
} from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    // 将token存入本地
    async login({
      commit
    }, payload) {
      try {
        const response = await User.login(payload)
        commit('setToken', response.token)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    // 将用户信息存入本地
    async getUserInfo({
      commit
    }) {
      try {
        const response = await User.getUserInfo()
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    // 删除本地和vuex的token和用户信息
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', '')
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
