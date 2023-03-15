<template>
  <v-container>
    <h2 class="title">Victoria</h2>
    <shop-list :products="products" />
  </v-container>
</template>
<script>
import ShopList from '@/components/lecture/shop/ShopList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: { ShopList },
  name: 'ShopListPage',
  computed: {
  ...mapState({
    products: state => state.products.map(product => ({
      ...product,
      imageDataList: product.imageDataList
    }))
  })
},


  mounted() {
    this.requestProductList();
  },
  methods: {
    ...mapActions(['requestProductList']),
  },
};
</script>
<style>
.title {
  display: flex;
  justify-content: center;
}
</style>
