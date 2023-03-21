<template>
  <div justify="center">

    <product-list-form :allOfProducts="allOfProducts"></product-list-form>
  </div>
</template>

<script>
import ProductListForm from "@/components/lecture/product/ProductTestListForm.vue";
import { mapState, mapActions } from "vuex";

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
    ...mapState([
      'allOfProducts',
    ])
  },
  methods: {
    ...mapActions([
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