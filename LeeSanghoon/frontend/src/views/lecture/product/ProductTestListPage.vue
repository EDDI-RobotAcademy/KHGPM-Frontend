<template>
  <div justify="center">

    <product-list-form :allOfProducts="allOfProducts"></product-list-form>
  </div>
</template>

<script>

import ProductListForm from "@/components/lecture/product/ProductTestListForm.vue";
import { mapState, mapActions } from "vuex";

const productModule = 'productModule'

export default {
  name: "productTestListPage",
  components: {
    ProductListForm
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState(productModule, [
      'allOfProducts',
    ])
  },
  methods: {
    ...mapActions(productModule, [
      'requestAllOfProductToSpring'
    ])
  },
  async mounted() {
    await this.requestAllOfProductToSpring()
  }
}
</script>

<style>

</style>