import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
} from './mutation-types'

import axios from 'axios'

export default {  //commit 할게 없으면 공객체 전달 ({})
    requestCreateBoardToSpring ({ commit }, payload) {

        const { title, content, writer } = payload
        return axios.post('http://localhost:7777/board/register',
            { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공!')
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestBoardListToSpring({ commit }){
        return axios.get('http://localhost:7777/board/list') //res에 Board객체 전달
            .then((res) => {
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    requestBoardToSpring({ commit }, boardId ) {
        return axios.get(`http://localhost:7777/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
    },
    requestDeleteBoardToSpring ({}, boardId) {
        return axios.delete(`http://localhost:7777/board/${boardId}`)
            .then(() => {
                alert('삭제성공!')
            })
            .catch(() => {
                alert('문제발생!')
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
    requestProductListToSpring ({ commit }) {
        return axios.get(`http://localhost:7777/product/list`)
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    requestCreateProductToSpring ({}, payload) {

       // const { title, price, detail } = payload
        return axios.post('http://localhost:7777/product/register', payload)
            .then(() => {
                alert('상품 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestProductToSpring({ commit }, productId ) {
        return axios.get(`http://localhost:7777/product/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    requestDeleteProductToSpring ({}, productId) {
        return axios.delete(`http://localhost:7777/product/${productId}`)
            .then(() => {
                alert('삭제성공!')
            })
            .catch(() => {
                alert('문제발생!')
            })
    },
    requestProductModifyToSpring ({}, payload) {
        const { title, price, productId, detail } = payload

        return axios.put(`http://localhost:7777/product/${productId}`,
            { title, price, detail })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
}