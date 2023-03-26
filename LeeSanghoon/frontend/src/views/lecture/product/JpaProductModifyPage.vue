<template>
  <v-container>
    <div align="center">
      <h2>게시물 수정</h2>
      <jpa-product-modify-form v-if="product" :productId="productId"
                               :product="product" :productImages="productImages" @submit="onSubmit"/>
      <p v-else>로딩중 ........</p>
    </div>
  </v-container>
</template>

<script>

import JpaProductModifyForm from '@/components/lecture/product/JpaProductModifyForm.vue'
import { mapActions, mapState } from 'vuex'

const productModule = 'productModule'

export default {
    components: { JpaProductModifyForm },
    name: "JpaProductModifyPage",
    props: {
        productId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(productModule, ['product', 'productImages'])
    },
    methods: {
        ...mapActions(productModule, [
            'requestProductToSpring',
            'requestProductModifyToSpring',
            'requestProductImageToSpring',
        ]),
        async onSubmit (payload) {
            //const { productName, content, writer, price } = payload
            //const productId = this.productId

            // console.log('after submit: ' + productId)
            // console.log('before axios: ')
            // for (let value of payload.values()) {
            //   console.log(value);
            // }

            console.log('payload: ' + JSON.stringify(payload))

            await this.requestProductModifyToSpring(
                //{ productId, productName, content, writer, price })
                payload)
            await this.$router.push({
                name: 'JpaProductReadPage',
                params: { productId: this.productId, productImages: this.productImages }
            })
        }
    },
    async created () {
        await this.requestProductToSpring(this.productId)
        await this.requestProductImageToSpring(this.productId)
    }
}

</script>

<style>

</style>