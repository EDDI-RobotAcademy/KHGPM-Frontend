import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import GloblaComponent from "@/components/lecture/componenetTest/GlobalComponent.vue"

Vue.config.productionTip = false

// 글로벌 커스텀 태그 등록
Vue.component(GloblaComponent.name, GloblaComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
