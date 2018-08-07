import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/admin/Login'
import Layout from '../views/layout/Layout'


Vue.use(Router);

const constantRouterMap = [{
    path: '/',
    name:'helloworld',
    component: HelloWorld
  },
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/admin',
    name:'admin',
    component: Layout,
    children: [
        { path: '/admin/news', name:'news', component: () => import('@/views/components/News'),  meta: {requireAuth: true,},},
        { path: '/admin/newsinfo',  name:'newsinfo', component: () => import('@/views/components/NewsInfo'),  meta: {requireAuth: true,},},
        { path: '/admin/company',  name:'company', component: () => import('@/views/components/Company'),  meta: {requireAuth: true,},},
        { path: '/admin/college',  name:'college', component: () => import('@/views/components/College'),  meta: {requireAuth: true,},},
        { path: '/admin/laboratory', name:'laboratory', component: () => import('@/views/components/Laboratory'),  meta: {requireAuth: true,},},
    ]
  },
];


// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('1', window.localStorage.getItem('token'));
}

const router = new Router({
  mode: 'history',
  routes: constantRouterMap
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth) && store.state.token==null) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
});
export default router;