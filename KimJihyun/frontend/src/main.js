import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import GlobalComponent from "@/components/lecture/componentTest/GlobalComponent.vue"

Vue.config.productionTip = false

// glocal-component 커스텀 태그를 등록한 것(Componemt, import한 Component)
// 전역으로 실행하게 하기 위한 것!

Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')