import {
    REQUEST_CREATE_BOARD_TO_SPRING,
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    
} from './mutation-types'

import axios from 'axios'

export default {
    requestCreateBoardToSpring({ commit }, payload) {
        const { title, content, writer } = payload
        return axios.post('http://localhost:7777/board/register', { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공!\n번호: '+ res.data.boardId +", 제목: "+ res.data.title +"\n작성자: "+ res.data.writer +", 내용: "+ res.data.content);
                // 코드 구조상 commit 보단 return 이 낫다?
                // commit(REQUEST_CREATE_BOARD_TO_SPRING, res.data)
                return res
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestBoardListToSpring({ commit }) {
        return axios.get('http://localhost:7777/board/list')
            .then((res) => {
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    requestBoardToSpring({ commit }, boardId) {
        return axios.get(`http://localhost:7777/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
            .cathch(() => {
                alert("requestBoardToSpring 문제 발생!")
            })
    },
    requestDeleteBoardToSpring({}, boardId) {
        return axios.delete(`http://localhost:7777/board/${boardId}`)
        .then(() => {
            alert("삭제 성공")
        })
        .catch(() => {
            alert('문제 발생!')
        })
    },
    requestBoardModifyToSpring({}, payload) {
        const { boardId, title, writer, content } = payload
        return axios.put(`http://localhost:7777/board/${boardId}`, { title, writer, content })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },

    requestCreateProductToSpring({}, payload) {
        return axios.post('http://localhost:7777/product/register', payload)
            .then((res) => {
                alert('상품 등록 성공!')
                return res
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestProductListToSpring({ commit }) {
        return axios.get('http://localhost:7777/product/list')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    requestProductToSpring({ commit }, productNo) {
        return axios.get(`http://localhost:7777/product/${productNo}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    requestDeleteProductToSpring({}, productNo) {
        return axios.delete(`http://localhost:7777/product/${productNo}`)
        .then(() => {
            alert("삭제 성공")
        })
        .catch(() => {
            alert('문제 발생!')
        })
    },
    requestProductModifyToSpring({}, payload) {
        const { productNo, name, price, writer, content } = payload
        return axios.put(`http://localhost:7777/product/${productNo}`, { name, price, writer, content })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
}