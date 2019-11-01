import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import '@fortawesome/fontawesome-free/css/all.css'

locale.use(lang)
Vue.use(Antd)
Vue.use(Element)

// Create the App with the router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
