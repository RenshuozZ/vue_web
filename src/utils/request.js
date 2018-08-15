import axios from 'axios'
// import qs from 'qs'
import store from '../store/store'
import router from '../router/index'
import {
  Message
} from 'element-ui'
import {
  showFullScreenLoading,
  tryHideFullScreenLoading
} from './loading'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  // baseURL: "http://localhost:8888/api", // api的base_url
  // baseURL: "http://localhost:8888/api", // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = `bearer ${store.state.token}`
  }
  // if(config.method === 'get') {
  //   config.data = qs.stringify(config.data);
  // }
  showFullScreenLoading()
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    return response.data
  },
  error => {
    var errorMessage = error.message
    if (error.response) {
      if (error.response.status === 401) {
        // 401 清除token信息并跳转到登录页面
        store.commit('2')
        // 只有在当前路由不是登录页面才跳转
        if (router.currentRoute.name !== 'login') {
          router.replace({
            name: 'login',
            query: {
              redirect: router.currentRoute.path
            }
          })
        }
        tryHideFullScreenLoading()
        return Promise.reject(error)
      }
      if (error.response.data) {
        errorMessage = error.response.data.userMessage
      }
    }
    Message({
      message: errorMessage,
      type: 'error',
      duration: 5 * 1000
    })
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)
export default service
