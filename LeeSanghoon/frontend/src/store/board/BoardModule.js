import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "@/store/board/mutations";
import state from "@/store/board/boardStates"
import actions from "@/store/board/actions";

Vue.use(Vuex)

const BoardModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default BoardModule