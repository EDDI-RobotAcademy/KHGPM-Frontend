import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states"
import actions from "@/store/actions"
import mutations from "@/store/mutations"
import getters from "@/store/getters"

import productModule from "@/store/product/ProductModule.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    productModule: productModule,
  },
  state,
  actions,
  mutations,
  getters,
})

export default store