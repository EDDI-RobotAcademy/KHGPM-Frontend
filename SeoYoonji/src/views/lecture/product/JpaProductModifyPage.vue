<template>
    <v-container>
      <div align="center">
          <h2>상품 수정</h2>
          <jpa-product-modify-form v-if="product" :product="product" @submit="onSubmit"/>
          <p v-else>로딩중 ...........</p>
      </div>
    </v-container>
  </template>
  
  <script>
  import JpaProductModifyForm from '@/components/lecture/product/JpaProductModifyForm.vue'
  import { mapActions, mapState } from 'vuex'
  
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
          ...mapState(['product'])
      },
      methods: {
          ...mapActions([
              'requestProductToSpring',
              'requestProductModifyToSpring',
          ]),
          async onSubmit (payload) {
              const { title, price, detail } = payload
              const productId = this.productId
  
              await this.requestProductModifyToSpring({ productId, title, price, detail })
              await this.$router.push({
                  name: 'JpaProductReadPage',
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