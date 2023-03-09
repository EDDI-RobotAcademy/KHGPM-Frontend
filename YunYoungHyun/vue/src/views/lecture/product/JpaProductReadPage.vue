<template>
    <div class="container" align="center">
        <h2 class="text-center mb-5">상품 상세보기</h2>
        <jpa-product-read v-if="product" :product="product"/>
        <p v-else>로딩중...............</p>

        <div class="mt-3">
            <router-link class="btn btn-outline-primary me-2" :to="{ name: 'JpaProductModifyPage', params: { productNo } }">
                수정
            </router-link>
            <button class="btn btn-outline-primary me-2" @click="onDelete">삭제</button>
            <router-link :to="{ name: 'JpaProductListPage' }">
                <button class="btn btn-outline-danger" type="button">돌아가기</button>
            </router-link>
        </div>
    </div>
</template>

<script>

import JpaProductRead from '@/components/lecture/product/JpaProductRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'JpaProductReadPage',
    components : { JpaProductRead },
    props: {
        productNo: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['product'])
    },
    methods: {
        ...mapActions([
            'requestProductToSpring',
            'requestDeleteProductToSpring'
        ]),
        async onDelete() {
            await this.requestDeleteProductToSpring(this.productNo);
            await this.$router.push({ name: 'JpaProductListPage' })
        }
    },
    created() {
        this.requestProductToSpring(this.productNo)
    }
}

</script>

<style>

</style>