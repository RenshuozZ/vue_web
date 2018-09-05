import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
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
