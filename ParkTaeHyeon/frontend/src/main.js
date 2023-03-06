import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import GlobalComponent from "@/components/lecture/componentTest/GlobalComponent.vue"

Vue.config.productionTip = false

// global-component 커스텀 태그 등록
Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
