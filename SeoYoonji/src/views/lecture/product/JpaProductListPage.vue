<template>
  <v-container>
    <h2>상품 페이지</h2>
    <jpa-product-list :products="products"/>
    <router-link :to="{ name: 'JpaProductRegisterPage' }">
      상품 등록
    </router-link>
  </v-container>
</template>

<script>
import JpaProductList from '@/components/lecture/product/JpaProductList.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaProductList },
    name: "JpaProductListPage",
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