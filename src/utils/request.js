import axios from 'axios'
const service = axios.create({
  baseURL: 'http://2105b.9yuecloud.com/pro-api',
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  })
service.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  })

export default service
