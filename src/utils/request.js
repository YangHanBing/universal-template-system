import axios from 'axios'
// 引入封装订单loading加载
import loading from './loading'
import router from '../router'
import store from '../store'

import md5 from 'md5'

import {
  ElMessage
} from 'element-plus'
import { isCheckTimeout } from './auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    loading.open()
    const {
      icode,
      time
    } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
    // TODO 将token 通过请求头发送给后台
    const token = store.getters.token
    if (token) config.headers.Authorization = 'Bearer ' + token
    // 当token超时时退出登录（被动退出登录）
    if (token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        router.push('/login')
      }
    }

    return config
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  })
// 响应拦截器
service.interceptors.response.use(
  (res) => {
    loading.close()
    const {
      success,
      data,
      message
    } = res.data
    if (success) {
      return data
    } else {
      _showError(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    loading.close()
    // 让token过期时退出登录（被动退出登录）
    if (error.response && error.response.data && error.response.data.code === 401) {
      store.dispatch('user/lgout')
      router.push('/login')
    }

    // 单用户登录
    // if (error.response && error.response.data && error.response.data.code === 401) {
    //   store.dispatch('user/lgout')
    //   router.push('/login')
    // }
    _showError(error.message)
    return Promise.reject(error)
  })

// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}

// 统一为data传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}

// 获取.code
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}

export default request
