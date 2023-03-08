import Vue from 'vue'
import Vuex from 'vuex'

import state from '@/store/states.js'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'
import getters from '@/store/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // 왜 states 안 하고 state 라고 하나요?
  // states 가 예약어이기 때문에 js 코드가 요상한 동작을 하게 됩니다.
  state,
  actions,
  mutations,
  getters,
})