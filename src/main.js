// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vuex
import store from './store/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import _const from './global'
Vue.config.productionTip = false
Vue.prototype._const = _const
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
