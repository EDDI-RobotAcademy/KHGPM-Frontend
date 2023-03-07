import {
   REQUEST_BOARD_LIST_TO_SPRING,
   REQUEST_BOARD_TO_SPRING,
   REQUEST_PRODUCT_LIST_TO_SPRING,
   REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

export default {
   [REQUEST_BOARD_LIST_TO_SPRING] (state, boards) {
       state.boards = boards
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