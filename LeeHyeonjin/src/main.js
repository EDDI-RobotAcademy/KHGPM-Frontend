import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import GlobalComponent from "@/components/lecture/componentTest/GlobalComponent.vue"
Vue.component(GlobalComponent.name, GlobalComponent)
Vue.config.productionTip = false

// 전역변수 설정하기 = 커스텀 태그 만들기 / 주로 버튼
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
