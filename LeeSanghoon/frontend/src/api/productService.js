import axiosInst from "@/utility/axiosObject";

export const requestCreateProduct = async (productName, content, writer, price) => {
    
    console.log('requestCreateProduct()')

    return axiosInst.post('/product/register',
        { productName, content, writer, price })
        .then(() => {
            alert('상품 등록 성공!')
        })
        .catch(() => {
            alert('문제 발생!')
        })
}

/*
requestCreateProductToSpring ({}, payload) {

        console.log('payload: ' + payload)
        const { productName, content, writer, price } = payload
        return axios.post('http://localhost:7777/product/register',
            payload)
            //{ productName, content, writer, price })
            .then(() => {
                alert('상품 등록 성공!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    requestProductListToSpring ({ commit }) {
        // return axios.get('http://localhost:7777/product/list')
        //     .then((res) => {
        //         commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
        //     })
        return axiosInst.get('/product/list')
            .then((res) => {
                commit(REQUEST_PRODUCT_LIST_TO_SPRING, res.data)
            })
    },
    requestProductToSpring ({ commit }, productId) {
        // return axios.get(`http://localhost:7777/product/${productId}`)
        //     .then((res) => {
        //         commit(REQUEST_PRODUCT_TO_SPRING, res.data)
        //     })
        return axiosInst.get(`/product/${productId}`)
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
    },
    requestAllOfProductToSpring ({ commit }) {
        return axios.get('http://localhost:7777/product/all')
            .then((res) => {
                commit(REQUEST_ALL_PRODUCT_TO_SPRING, res.data)
                console.log("allProduct: " + res.data)
            })
    },
*/