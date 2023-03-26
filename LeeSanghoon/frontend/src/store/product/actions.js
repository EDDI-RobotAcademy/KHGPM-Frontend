import {
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_ALL_PRODUCT_TO_SPRING,
} from './mutation-types'

import axiosInst from '@/utility/axiosObject'

export default {
    async requestCreateProductToSpring ({}, payload) {
        // how to print formData
        for (let key of payload.keys()) {
            console.log(key, ": ", payload.get(key))
        }

        try {
            await axiosInst.post('/product/register', payload)
            alert('상품 등록 성공!')
        } catch {
            alert('문제 발생!')
        }
    },
    async requestProductListToSpring ({ commit }) {
        return await axiosInst.get('/product/list')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    async requestProductToSpring ({ commit }, productId) {
        return await axiosInst.get(`/product/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_TO_SPRING, res.data)
            })
    },
    async requestDeleteProductToSpring ({}, productId) {
        return await axiosInst.delete(`/product/${productId}`)
            .then(() => {
                alert("삭제 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    async requestProductModifyToSpring ({}, payload) {
        console.log('requestProductModifyToSpring()')
        const { productId, formData } = payload

        console.log('before request: ' + payload)
        console.log('formData: ' + formData)
        for (let idx = 0, len = files.length; idx < len; idx++) {
            console.log(payload.formData[idx])
        }
        console.log('requestProductModifyToSpring productId: ' + productId)

        return await axiosInst.put(`/product/${productId}`,
            //{ productName, content, writer, price })
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => {
                alert("수정 성공")
            })
            .catch(() => {
                alert("문제 발생!")
            })
    },
    async requestProductImageToSpring ({ commit }, productId) {
        return await axiosInst.get(`/product/imageList/${productId}`)
            .then((res) => {
                commit(REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING, res.data)
            })
    },
    async requestAllOfProductToSpring ({ commit }) {
        return await axiosInst.get('/product/all')
            .then((res) => {
                commit(REQUEST_ALL_PRODUCT_TO_SPRING, res.data)
                console.log("allProduct: " + res.data)
            })
    },
}