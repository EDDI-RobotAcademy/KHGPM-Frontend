import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
} from './mutation-types'

import axios from 'axios'

export default {
    requestCreateBoardToSpring ({ }, payload) {

        const { title, content, writer } = payload
        return axios.post('http://localhost:7777/board/register',
            { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공!')
                return res
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
    requestDeleteBoardToSpring ({}, boardId) {
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

    requestCreateProductToSpring ({}, formData) {

        return axios.post('http://localhost:7777/product/register',
            formData)
            .then(() => {
                alert('상품 등록 성공!')
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
    requestDeleteProductToSpring ({}, productId) {
        return axios.delete(`http://localhost:7777/product/${productId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestProductModifyToSpring ({}, payload) {
        const { productName, content, productId, writer, price } = payload

        return axios.put(`http://localhost:7777/product/${productId}`,
            { productName, content, writer, price })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestProductImageToSpring ({ commit }, productId) {
        return axios.get(`http://localhost:7777/product/imageList/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING, res.data)
            })
    }
}