import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Login from '../components/admin/Login'
import Layout from '../views/layout/Layout'


Vue.use(Router)

export const constantRouterMap = [{
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
        { path: '/admin/newsinfo/:newsId',  name:'newsinfo', component: () => import('@/views/components/NewsInfo'),  meta: {requireAuth: true,},},
        { path: '/admin/company',  name:'company', component: () => import('@/views/components/Company')},
        { path: '/admin/college',  name:'college', component: () => import('@/views/components/College')},
        { path: '/admin/laboratory', name:'laboratory', component: () => import('@/views/components/Laboratory')},
    ]
  },
]

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(r => r.meta.requireAuth)) {
//     if (store.state.token) {
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     }
//   } else {
//     next();
//   }
// })
export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
