import request from '@/utils/request'
const getUser = (data) => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
export default {
  getUser
}
