import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states" // import 할 때 state 라고 정정
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"

Vue.use(Vuex)

export default new Vuex.Store({
  // 왜 states 라고 안하고 state 라고 하나요?
  // states 가 예약어이기 때문에 js 코드가 이상한 동작을 하게 된다.
  state,
  actions,
  mutations,
  getters,
})