import Layout from '../../layout'
export default {
  path: '/user',
  component: Layout,
  name: 'userManage',
  redirect: '/user/manage',
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [{
      path: '/user/manage',
      component: () => import('../../views/user-manage'),
      meta: {
        title: '员工管理',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/user/info/:id',
      component: () => import('../../views/user-info'),
      meta: {
        title: '员工信息'
      }
    },
    {
      path: '/user/import',
      component: () => import('@/views/import'),
      name: 'import',
      meta: {
        title: 'Excel导入'
      }
    }
  ]
}
