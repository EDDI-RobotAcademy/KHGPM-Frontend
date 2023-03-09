import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
    REQUEST_PRODUCT_BOARD_LIST_TO_SPRING,
} from './mutation-types'

export default {
    // states로 구성하면 안됨(예약어)
    [REQUEST_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.boards = passingData
    },
    [REQUEST_BOARD_TO_SPRING] (state, passingData) {
        state.board = passingData
    },
    [REQUEST_PRODUCT_BOARD_LIST_TO_SPRING] (state, passingData) {
        state.products = passingData
    },
}
// 고정된 매핑 호출 []