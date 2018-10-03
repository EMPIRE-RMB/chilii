import Vue from 'vue'
import App from './App.vue'
import store from './store'
import iview from 'iview'

Vue.config.productionTip = false
Vue.use(iview)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
