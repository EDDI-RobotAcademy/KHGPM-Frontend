<template>
  <v-container>
    <h2>등록 상품 리스트</h2>
    <router-link :to="{ name: 'JpaProductRegisterPage'}">
        상품 등록
    </router-link>
    <jpa-product-list :products="products"/> 
    <!-- <jpa-product-list : boards="boards"/> 해당 구문은 import JpaProductList를 이용하여 화면 구현 -->
  </v-container>
</template>

<script>

import JpaProductList from '@/components/lecture/product/JpaProductList.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {JpaProductList},
    name: "JpaProductListPage",
    computed: {
        ...mapState([
            'products'
        ])
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