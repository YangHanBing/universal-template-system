import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Layout from '../layout'

// 公有路由表
const publicRoutes = [{
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/profile',
    children: [{
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'example'
        }
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      }
    ]
  }
]
// 私有路由表
const privateRoutes = [{
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [{
        path: '/user/manage',
        name: 'user/manage',
        component: () => import('../views/user-manage'),
        meta: {
          title: '用户管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'user/role',
        component: () => import('../views/role-list'),
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'user/permission',
        component: () => import('../views/permission-list'),
        meta: {
          title: '权限管理',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('../views/user-info')
      },
      {
        path: '/user/import',
        name: 'userImport',
        component: () => import('../views/import')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: () => Layout,
    meta: {
      title: '文章',
      icon: 'article'
    },
    redirect: '/article/ranking',
    children: [{
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('../views/article-ranking'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('../views/article-create'),
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('../views/article-detail')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
