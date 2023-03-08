import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"

Vue.use(Vuex)

export default new Vuex.Store({
  // Q. 왜 states 안하고 state 하나요??????
  // A. states가 예약어이기 때문에 js 코드가 요상한 동작을 하게됨
  state,
  actions,
  mutations,
  getters,
})