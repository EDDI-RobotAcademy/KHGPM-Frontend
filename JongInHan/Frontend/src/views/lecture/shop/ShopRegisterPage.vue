<template>
  <v-container>
    <shop-register-form @submit="onSubmit" />
  </v-container>
</template>

<script>
import ShopRegisterForm from '@/components/lecture/shop/ShopRegisterForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { ShopRegisterForm },
  name: 'ShopRegisterPage',
  methods: {
    ...mapActions(['requestProduct']),
    async onSubmit(payload) {
      await this.requestProduct(payload);
      await this.$router.push({
        name: 'ShopListPage',
      });
    },
  },
};
</script>

<style>
.product-registration-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
label {
  font-weight: bold;
}
input,
textarea {
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
</style>
