import axiosInst from '@/utility/axiosObject'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        products: [],
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        async requestCreateProductToSpring ({}, payload) {
            for (let key of payload.keys()) {
                console.log(key, ": ", payload.get(key))
            }
            //const { productName, content, writer, price } = payload
            try {
                await axiosInst('/product/register', payload)
                alert('상품 등록 성공!')
            } catch {
                alert('문제 발생!')
            }
        },
    }
}