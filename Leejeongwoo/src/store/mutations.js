// mutations: state를 업데이트하는 메서드입니다.
// ->> 실제 Vue에서 관리해야 하는 상태(state)에 값을 설정하는데 사용합니다.
import {
  REQUEST_BOARD_LIST_TO_SPRING,
  REQUEST_BOARD_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
  REQUEST_PRODUCT_TO_SPRING,
} from './mutation-types'

export default {
  // states로 구성하면 안됨(예약어)
  [REQUEST_BOARD_LIST_TO_SPRING] (state, passingData) {
      state.boards = passingData
  },
  [REQUEST_BOARD_TO_SPRING] (state, passingData) {
      state.board = passingData
  },
  [REQUEST_PRODUCT_LIST_TO_SPRING] (state, passingData) {
      state.products = passingData
  },
  [REQUEST_PRODUCT_TO_SPRING] (state, passingData) {
      state.product = passingData
  }
}