<template>
  <v-container>
    <div align="center">
      <h2>Product</h2>
      <p><mark>판매 상품 목록이 보여지는 페이지 입니다.</mark></p>
      <router-link :to="{ name: 'ProductRegisterPage' }">
        상품 등록하러 가기
      </router-link>
    </div>
    <product-list-form :products="products" :img="img" />
  </v-container>
</template>

<script>
import ProductListForm from '@/components/lecture/product/ProductListForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { ProductListForm },
  name: "ProductListPage",
  computed: {
    ...mapState([
      'products'
    ]),
  },
  mounted () {
    this.requestProductListToSpring()
  },
  methods: {
    ...mapActions([
      'requestProductListToSpring'
    ])
  }
}
</script>

<style></style>