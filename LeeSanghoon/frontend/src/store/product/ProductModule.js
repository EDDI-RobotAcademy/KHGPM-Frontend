import axiosInst from '@/utility/axiosObject'

import Vue from 'vue'
import Vuex from 'vuex'

import {
    REQUEST_ALL_PRODUCT_TO_SPRING,
    REQUEST_PRODUCT_IMAGE_LIST_TO_SPRING,
    REQUEST_PRODUCT_LIST_TO_SPRING,
    REQUEST_PRODUCT_TO_SPRING
} from "@/store/product/mutation-types";

import mutations from "@/store/product/mutations";

Vue.use(Vuex)

const ProductModule = {
    namespaced: true,
    state: {
        products: [],
        product: {},
        productImages: [],
        allOfProducts: [],
    },
    actions: {
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
            const { productName, content, productId, writer, price } = payload

            return await axiosInst.put(`/product/${productId}`,
                { productName, content, writer, price })
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
    },
    mutations,
}

export default ProductModule