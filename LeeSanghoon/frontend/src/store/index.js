import Vue from 'vue'
import Vuex from 'vuex'

import state from "@/store/states"

import productModule from "@/store/product/ProductModule.js"
import boardModule from "@/store/board/BoardModule.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    boardModule: boardModule,
    productModule: productModule,
  },
  state,
})

export default store