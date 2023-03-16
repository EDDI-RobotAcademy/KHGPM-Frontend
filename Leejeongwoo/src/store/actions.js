// actions: 비동기 작업을 수행하거나 여러 뮤테이션을 호출하여 상태를 업데이트하는 메서드입니다.
// ->> Backend와 통신하기 위한 목적으로 사용합니다.
import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
} from './mutation-types'

import axios from 'axios'

export default {
    //등록
    requestCreateBoardToSpring ({}, payload) {
        const { title, content, writer } = payload
        return axios.post('http://localhost:7777/board/register',
            { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공: ' + JSON.stringify(res.data))
                return res
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    //
    requestBoardListToSpring ({ commit }) {
        return axios.get('http://localhost:7777/board/list')
            .then((res) => {
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    // 
    requestBoardToSpring ({ commit }, boardId) {
        return axios.get(`http://localhost:7777/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
        },
    //삭제
        requestDeleteBoardToSpring ({}, boardId) {
            return axios.delete(`http://localhost:7777/board/${boardId}`)
                .then(() => {
                    alert("삭제 성공")
                })
                .catch(() => {
                    alert("문제 발생!")
                })
    },
    //수정
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
    //상품
    //등록
requestCreateProductToSpring ({}, payload) {
    // const { productName, kategorie, content, brand, price, img } = payload
    return axios.post('http://localhost:7777/product/register',
    payload)
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
    const { productName, kategorie, content, brand, price, img  } = payload

    return axios.put(`http://localhost:7777/product/${productId}`,
        { productName, kategorie, content, brand, price, img  })
        .then(() => {
            alert("수정 성공")
        })
        .catch(() => {
            alert("문제 발생!")
        })
},
}