// Mutations 의 주요 역할은 state를 변경시키는 역할(Mutation를 통해서만 state를 변경해야 한다)
// 동기 처리 방식, 위의 함수가 실행되고 종료된 후 그 다음 아래의 함수가 실행된다. 
// commit('함수명', '전달인자')로 실행시킬 수 있다.
// mutations 내에 함수 형태로 작성

import {
   REQUEST_BOARD_LIST_TO_SPRING,
   REQUEST_BOARD_TO_SPRING,
   REQUEST_PRODUCT_LIST_TO_SPRING,
   REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

export default {
   [REQUEST_BOARD_LIST_TO_SPRING] (state, boards) {
       state.boards = boards // state에 정의한 boards 변수에 넘겨 받은 boards 값 입력
   },
   [REQUEST_BOARD_TO_SPRING] (state, passingData) {
      state.board = passingData
  },
   [REQUEST_PRODUCT_LIST_TO_SPRING] (state, products) {
      state.products = products
   },
   [REQUEST_PRODUCT_TO_SPRING] (state, passingData) {
      state.product = passingData
}
}