import Vue from 'vue'
import Vuex from 'vuex'
import state from "@/store/states"
import getters from "@/store/getters"
import mutations from "@/store/mutations"
import actions from "@/store/actions"
Vue.use(Vuex)
// 세션과 쿠키 관리
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
/**
 * states 는 예약어
 */
