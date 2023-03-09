<template>
  <v-container>
    <div align="center">
      <h2>게시물 수정</h2>
      <product-modify-form v-if="product" :product="product" @submit="onSubmit"/>
      <p v-else>로딩중 ........</p>
    </div>
  </v-container>
</template>

<script>

import ProductModifyForm from '@/components/lecture/product/ProductModifyForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { ProductModifyForm },
    name: "ProductModifyPage",
    props: {
        productId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['product'])
    },
    methods: {
        ...mapActions([
            'requestProductToSpring',
            'requestProductModifyToSpring',
        ]),
        async onSubmit (payload) {
            const { productName, content, writer, price } = payload
            const productId = this.productId

            await this.requestProductModifyToSpring(
                { productId, productName, content, writer, price })
            await this.$router.push({
                name: 'ProductReadPage',
                params: { productId: this.productId }
            })
        }
    },
    created () {
        this.requestProductToSpring(this.productId)
    }
}

</script>

<style>

</style>