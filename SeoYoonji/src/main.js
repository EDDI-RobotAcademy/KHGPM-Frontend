import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import GlobalComponent from "@/components/lecture/componentTest/GlobalComponent.vue"

Vue.config.productionTip = false

// 'global-component'라는 커스텀 태그 등록 vue.component(컴포넌트이름, 컴포넌트내용)
// global-component -> GlobalComponent 이름 자동 변환
Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
