import axios from 'axios'
// 引入封装订单loading加载
import loading from './loading'

import md5 from 'md5'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
service.interceptors.request.use(
  (config) => {
    loading.open()
    // TODO 将token 通过请求头发送给后台
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time
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
