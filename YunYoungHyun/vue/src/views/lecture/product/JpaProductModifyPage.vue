<template>
    <div class="container" align="center">
        <h2>상품 수정</h2>
        <jpa-product-modify-form v-if="product" :product="product" @submit="onSubmit"/>
        <p v-else>로딩중...............</p>
    </div>
</template>

<script>
import JpaProductModifyForm from '@/components/lecture/product/JpaProductModifyForm.vue';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'JpaProductModifyPage',
    components: { JpaProductModifyForm },
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
            'requestProductModifyToSpring'
        ]),
        async onSubmit(payload) {
            const { name, price, writer, content } = payload
            const productNo = this.productNo

            await this.requestProductModifyToSpring({ productNo, name, price, writer, content })
            await this.$router.push({
                name: 'JpaProductReadPage',
                params: { productNo: this.productNo }
            })
        }
    },
    created() {
        this.requestProductToSpring(this.productNo)
    }
}

</script>

<style>

</style>