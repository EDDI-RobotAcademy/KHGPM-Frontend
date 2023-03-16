<template>
    <div class="container">
        <h2 class="text-center my-5">상품 목록</h2>
        <div class="d-flex justify-content-end">
            <router-link :to="{ name: 'JpaProductRegisterPage' }">
                <button class="btn btn-outline-primary">상품 등록</button>
            </router-link>
        </div>
        <div>
            <jpa-product-list :products="products"/>
        </div>
    </div>
</template>

<script>
import JpaProductList from '@/components/lecture/product/JpaProductList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: "JpaProductListPage",
  components: { JpaProductList },
  computed: {
      ...mapState(['products'])
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