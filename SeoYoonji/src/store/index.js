import Vue from 'vue'
import Vuex from 'vuex'

import state from '@/store/states'
import actions from '@/store/actions'
import mutations from '@/store/mutations'
import getters from '@/store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  // states 가 아닌 state 인 이유
  // states 가 예약어이기 때문에 js코드가 이상한 동작을 하게 됨
  state,
  actions,
  mutations,
  getters,
})
