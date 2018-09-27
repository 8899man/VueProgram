// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import Rem from './http/rem'
import store from './store/store'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(Rem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  elementUI,
  components: { App },
  template: '<App/>'
})
