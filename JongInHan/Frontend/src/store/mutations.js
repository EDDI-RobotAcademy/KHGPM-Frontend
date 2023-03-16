import {
  REQUEST_BOARD_LIST_TO_SPRING,
  REQUEST_BOARD_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
  REQUEST_PRODUCT_TO_SPRING,
} from './mutation-types';

export default {
  // states로 구성하면 안됨(예약어)
  [REQUEST_BOARD_LIST_TO_SPRING](state, passingData) {
    state.boards = passingData;
  },
  [REQUEST_BOARD_TO_SPRING](state, passingData) {
    state.board = passingData;
  },
  [REQUEST_PRODUCT_LIST_TO_SPRING](state, passingData) {
    if (!passingData) {
      console.error('The data passed to REQUEST_PRODUCT_LIST_TO_SPRING mutation is undefined');
      return;
    }
  
    state.products = passingData.map(productResponse => ({
      ...productResponse,
      imageDataList: productResponse.imageDataList
    }));
  },
  
  
  
  [REQUEST_PRODUCT_TO_SPRING](state, passingData) {
    state.product = passingData;
  },
};
