import {
   REQUEST_BOARD_LIST_TO_SPRING,
   REQUEST_BOARD_TO_SPRING,
} from './mutation-types'

export default {
   [REQUEST_BOARD_LIST_TO_SPRING] (state, boards) {
       state.boards = boards
   },
   [REQUEST_BOARD_TO_SPRING] (state, passingData) {
      state.boards = passingData
  }
}