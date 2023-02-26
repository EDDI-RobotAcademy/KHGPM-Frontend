import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import GlobalComponent from '@/components/lecture/componentTest/GlobalComponent.vue'

Vue.config.productionTip = false

Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
