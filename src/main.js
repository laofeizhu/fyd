import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import router from './router'

Vue.use(Element)

// Create the App with the router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
