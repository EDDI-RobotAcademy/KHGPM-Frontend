<template>
  <v-container>
    <h2>상품 목록 페이지</h2>
    <router-link :to="{ name: 'ProductRegisterPage' }">
      게시물 작성
    </router-link>
    <product-list :products="products"/>
  </v-container>
</template>

<script>
import ProductList from '@/components/lecture/product/ProductList.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: { ProductList },
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

<style>

</style>