<template>
  <div class="product-registration-page">
    <h1>상품 등록</h1>
    <form @submit.prevent="registerProduct">
      <label for="name">상품명</label>
      <input type="text" id="name" v-model="name" required />
      <label for="description">상품설명</label>
      <textarea id="description" v-model="description" required></textarea>
      <label for="price">가격</label>
      <input type="number" id="price" v-model="price" required />
      <button type="submit">상품등록하기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      price: null,
    };
  },
  methods: {
    registerProduct() {
      // Code to register product with backend or submit the form
      alert(`Product registered: ${this.name}`);
      this.name = '';
      this.description = '';
      this.price = null;
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
