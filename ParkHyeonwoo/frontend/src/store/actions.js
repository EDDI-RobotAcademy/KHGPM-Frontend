// Actions의 주요 목적은 Mutations 를 실행시키는 역할 -> Mutations가 실행되면 state 도 변경된다.
// 비동기처리 방식, 순서에 상관없이 먼저 종료된 함수의 피드백을 받아 후속 처리를 한다.
// dispatch('함수명', '전달인자')로 실행시킬 수 있다. 
// * mapActions 를 통해서 dispatch 없이도 사용할 수 있다.
// actions 내에 함수 형태로 작성
// 비동기 처리이기 때문에 콜백함수로 주로 작성

import {
   REQUEST_BOARD_LIST_TO_SPRING,
   REQUEST_BOARD_TO_SPRING,
   REQUEST_PRODUCT_LIST_TO_SPRING,
   REQUEST_PRODUCT_TO_SPRING
} from './mutation-types'

import axios from 'axios'

export default {
   requestCreateBoardToSpring ({}, payload) {
       const { title, content, writer } = payload
       return axios.post('http://localhost:7777/board/register',
           { title, content, writer })
           .then((res) => {
               alert('게시물 등록 성공!' + JSON.stringify(res.data))
               return res; // commit 사용하지 않고 해결
           })
           .catch(() => {
               alert('문제 발생!')
           })
   },
   requestBoardListToSpring ({ commit }) {
       return axios.get('http://localhost:7777/board/list')
           .then((res) => {
               commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
           })
   },
   requestBoardToSpring ({ commit }, boardId) {
      return axios.get(`http://localhost:7777/board/${boardId}`)
          .then((res) => {
              commit(REQUEST_BOARD_TO_SPRING, res.data)
          })
  },
  requestDeleteBoardToSpring({}, boardId) {
      return axios.delete(`http://localhost:7777/board/${boardId}`)
         .then(() => {
            alert("삭제 성공")
         })
         .catch(() => {
            alert("문제 발생!")
         })
  },
  requestBoardModifyToSpring ({}, payload) {
   const { title, content, boardId, writer } = payload

   return axios.put(`http://localhost:7777/board/${boardId}`,
       { title, content, writer })
       .then(() => {
           alert("수정 성공")
       })
       .catch(() => {
           alert("문제 발생!")
       })
   },
   requestCreateProductToSpring ({}, payload) {
    const { productName, content, writer, price } = payload
    return axios.post('http://localhost:7777/product/register',
        { productName, content, writer, price })
        .then(() => {
            alert('게시물 등록 성공!')
        })
        .catch(() => {
            alert('문제 발생!')
        })
    },
    requestProductListToSpring ({ commit }) {
        return axios.get('http://localhost:7777/product/list')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    requestProductToSpring ({ commit }, productId) {
        return axios.get(`http://localhost:7777/product/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    requestProductModifyToSpring ({}, payload) {
        const { productId, productName, content, writer, price } = payload
     
        return axios.put(`http://localhost:7777/product/${productId}`,
            { productName, content, writer, price })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestDeleteProductToSpring({}, productId) {
        return axios.delete(`http://localhost:7777/product/${productId}`)
           .then(() => {
              alert("삭제 성공")
           })
           .catch(() => {
              alert("문제 발생!")
           })
    },
}