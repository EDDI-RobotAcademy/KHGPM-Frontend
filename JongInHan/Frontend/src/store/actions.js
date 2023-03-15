import {
  REQUEST_BOARD_LIST_TO_SPRING,
  REQUEST_BOARD_TO_SPRING,
  REQUEST_PRODUCT_LIST_TO_SPRING,
} from './mutation-types';

import axios from 'axios';

export default {
  requestCreateBoardToSpring({}, payload) {
    const { title, content, writer } = payload;
    return axios
      .post('http://localhost:7777/board/register', { title, content, writer })
      .then((response) => {
        const boardId = response.data;
        alert('게시물 등록 성공!');
        return boardId;
      })
      .catch(() => {
        alert('문제 발생!');
      });
  },
  requestBoardListToSpring({ commit }) {
    return axios.get('http://localhost:7777/board/list').then((res) => {
      commit(REQUEST_BOARD_LIST_TO_SPRING, res.data);
    });
  },
  requestBoardToSpring({ commit }, boardId) {
    return axios.get(`http://localhost:7777/board/${boardId}`).then((res) => {
      commit(REQUEST_BOARD_TO_SPRING, res.data);
    });
  },
  requestDeleteBoardToSpring({}, boardId) {
    return axios
      .delete(`http://localhost:7777/board/${boardId}`)
      .then(() => {
        alert('삭제 성공');
      })
      .catch(() => {
        alert('문제 발생!');
      });
  },
  requestBoardModifyToSpring({}, payload) {
    const { title, content, boardId, writer } = payload;

    return axios
      .put(`http://localhost:7777/board/${boardId}`, { title, content, writer })
      .then(() => {
        alert('수정 성공');
      })
      .catch(() => {
        alert('문제 발생!');
      });
  },
  requestProduct({}, payload) {
    const { name, description, price, files } = payload;
    let formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    for (let idx = 0; idx < files.length; idx++) {
      formData.append('fileList', files[idx]);
    }
    for (let key of formData.keys()) {
      console.log(key);
    }
    for (let value of formData.values()) {
      console.log(value);
    }

    return axios
      .post('http://localhost:7777/shop/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        alert('상품 등록 성공!');
      })
      .catch(() => {
        alert('문제 발생!');
      });
  },
  requestProductList({ commit }) {
    return axios.get('http://localhost:7777/shop/list').then((res) => {
      console.log('Fetched data from server:', res.data);
      commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data);
    });
  },
  requestProductToSpring({ commit }, productId) {
    return axios.get(`http://localhost:7777/shop/${productId}`).then((res) => {
      commit(REQUEST_BOARD_TO_SPRING, res.data);
    });
  },
};
