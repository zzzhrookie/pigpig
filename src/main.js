import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import '../static/css/reset.css'
import '../static/css/element-ui.scss'
import '../static/css/common.scss'
import App from './App'
import router from './router'
import store from './store/store'

Vue.use(Element)
Vue.use(mavonEditor)
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
