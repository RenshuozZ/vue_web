import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Login from '../views/Login'
import Layout from '../views/layout/Layout'
import Main from '../views/Main'
import Dashboard from '../views/Dashboard'
import NewsListView from '../views/NewsListView'
import NewsInfoView from '../views/NewsInfoView'

Vue.use(Router)

const constantRouterMap = [{
  path: '/',
  name: 'main',
  component: Dashboard,
  // 重定向
  redirect: '/main/dashboard'
},
{
  path: '/login',
  name: 'login',
  component: Login
},
{
  path: '/admin',
  name: 'admin',
  component: Layout,
  children: [
    { path: '/admin/news', name: 'news', component: () => import('@/views/components/News'), meta: {requireAuth: true, name: '信息管理>新闻管理'} },
    { path: '/admin/newsinfo', name: 'newsinfo', component: () => import('@/views/components/NewsInfo'), meta: {requireAuth: true, name: '信息管理>新闻操作'} },
    { path: '/admin/company', name: 'company', component: () => import('@/views/components/Company'), meta: {requireAuth: true, name: '信息管理>企业管理'} },
    { path: '/admin/college', name: 'college', component: () => import('@/views/components/College'), meta: {requireAuth: true, name: '信息管理>大学管理'} },
    { path: '/admin/laboratory', name: 'laboratory', component: () => import('@/views/components/Laboratory'), meta: {requireAuth: true, name: '信息管理>实验室管理'} }
  ]
},
{
  path: '/main',
  name: 'main',
  component: Main,
  children: [
    {
      path: '/main/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/main/newslistview',
      name: 'newslistview',
      component: NewsListView
    },
    {
      path: '/main/newsinfoview',
      name: 'newsinfoview',
      component: NewsInfoView
    }
  ]
}
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('1', window.localStorage.getItem('token'))
}

const router = new Router({
  mode: 'history',
  routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth) && store.state.token == null) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})
export default router
