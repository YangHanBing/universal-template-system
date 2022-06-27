import axios from 'axios'
import loading from './loading'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    loading.open()
    return config
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  })
service.interceptors.response.use(
  (res) => {
    loading.close()
    return res
  },
  (err) => {
    loading.close()
    return Promise.reject(err)
  })

// 统一为data传参
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  service(options)
}

export default request
