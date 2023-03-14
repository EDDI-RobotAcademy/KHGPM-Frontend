<template>
  <v-container>
    <div align="center">
      <h2>Vue + Spring 상품 게시판 읽기</h2>
      <jpa-product-read v-if="product" :product="product" :productImages="productImages"/>
      <p v-else>로딩중 .......... </p>
      <router-link :to="{ name: 'JpaProductModifyPage', params: { productId } }">
        게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to="{ name: 'JpaProductListPage' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>

<script>

import JpaProductRead from '@/components/lecture/product/JpaProductRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { JpaProductRead },
    name: "JpaProductReadPage",
    props: {
        productId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['product', 'productImages'])
    },
    methods: {
        ...mapActions([
            'requestProductToSpring',
            'requestDeleteProductToSpring',
            'requestProductImageToSpring',
        ]),
        async onDelete () {
            await this.requestDeleteProductToSpring(this.productId)
            await this.$router.push({ name: 'JpaProductListPage' })
        }
    },
    async created () {
        console.log('productId: ' + this.productId)
        await this.requestProductToSpring(this.productId)
        await this.requestProductImageToSpring(this.productId)
    }
}

</script>

<style>

</style>