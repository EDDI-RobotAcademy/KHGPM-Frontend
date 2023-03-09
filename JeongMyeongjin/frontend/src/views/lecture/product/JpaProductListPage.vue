<template>
  <v-container>
    <h2>Vue + Spring + JPA Products</h2>
    <router-link :to="{ name: 'JpaProductRegisterPage' }">
      상품 등록
    </router-link>
    <jpa-product-list :products="products"/>
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