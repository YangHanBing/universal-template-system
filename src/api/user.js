import service from '@/utils/request'
const getUser = (data) => {
  return service({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
export default {
  getUser
}
