<template>
  <v-container>
    <h2>종인몰</h2>
    <router-link :to="{ name: 'ShopListPage' }">상품 등록</router-link>
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
    ...mapState(['products']),
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
</style>