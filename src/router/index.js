import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

// 公有路由表
const publicRoutes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/login',
  name: 'login',
  component: () => import('../views/login')
},
{
  path: '/index',
  name: 'index',
  component: () => import('../views/index.vue'),
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/user/Home.vue')
    }
  ]
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
