import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {
    requestCreateBoardToSpring ({}, payload) {

        const { title, content, writer } = payload
        return axiosInst.post('/board/register',
            { title, content, writer })
            .then((res) => {
                alert('게시물 등록 성공: ' + JSON.stringify(res.data))
                return res
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestBoardListToSpring ({ commit }) {
        return axiosInst.get('/board/list')
            .then((res) => {
                commit(REQUEST_BOARD_LIST_TO_SPRING, res.data)
            })
    },
    requestBoardToSpring ({ commit }, boardId) {
        return axiosInst.get(`/board/${boardId}`)
            .then((res) => {
                commit(REQUEST_BOARD_TO_SPRING, res.data)
            })
    },
    requestDeleteBoardToSpring ({}, boardId) {
        return axiosInst.delete(`/board/${boardId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    requestBoardModifyToSpring ({}, payload) {
        const { title, content, boardId, writer } = payload

        return axiosInst.put(`/board/${boardId}`,
            { title, content, writer })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
}