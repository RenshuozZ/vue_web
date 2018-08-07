import axios from 'axios'
import qs from 'qs'
import {
  Message
} from 'element-ui'
import {showFullScreenLoading,tryHideFullScreenLoading} from './loading'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: "http://localhost:8888/api", // api的base_url
  // baseURL: "http://localhost:8888/api", // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {

  // if (store.state.token) {
  //   config.headers.Authorization = `bearer ${store.state.token}`;
  // }
  // if(config.method === 'get') {
  //   config.data = qs.stringify(config.data);
  // }
  showFullScreenLoading();
  return config;
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)

})

// respone interceptor
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading();
    return response.data;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit("2");

          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login',
              query: {
                redirect: router.currentRoute.path
              },
            })
      }
    } else {
      console.log('err' + error); // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
      return Promise.reject(error);
    }
  }
)


export default service 
