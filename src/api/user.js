import service from '@/utils/request'
const getUser = () => {
  return service({
    url: '/admin/login',
    methos: 'POST'
  })
}
export default {
  getUser
}
