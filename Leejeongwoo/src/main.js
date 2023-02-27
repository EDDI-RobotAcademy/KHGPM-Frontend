// npm run serve 해주면
// 가장 먼저 실행되는 파일이 main.js 이다.
import Vue from 'vue'
import App from './App.vue'
// ./router를 가져와라 이름이 router로 선언해서 가져와라
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import GlobalComponent from "@/components/lecture/componentTest/GlobalComponent.vue"

Vue.config.productionTip = false

// global-component 커스텀 태그 등록
// 컴포넌트를 전역변수로 등록
//               컴포넌트 명      ,       옵션
Vue.component(GlobalComponent.name, GlobalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
// mount는 컴퓨터에서 Mount란 어떠한 것을 Available 한 상태로 준비하는 것을 말한다.
//좀 더 추상적인 개념이지, 딱 하나로 이어지는 구체적인 단어는 아니다. 하드 디스크 상의 데이터들을 렘으로 올리는 것 으로 이해