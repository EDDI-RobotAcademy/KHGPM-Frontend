<template>
  <v-container>
    <h2>상품 게시판 목록 페이지</h2>
    <h1>상품</h1>
    <router-link :to="{}"></router-link>
    <product-board-list-form :products="products"/>
  </v-container>

</template>

<script>
import ProductBoardListForm from '@/components/lecture/productBoard/ProductBoardListForm.vue'
import {mapActions, mapState} from 'vuex'
export default {
    name: "ProductBoardListPage",
    components: { ProductBoardListForm },
    computed: {
      ...mapState([
        'products'
      ]),
    },
    mounted(){
      this.requestProductBoardListToSpring()

    },
    methods: {
      ...mapActions([
        'requestProductBoardListToSpring'
      ])
    }

}
</script>

<style>

</style>