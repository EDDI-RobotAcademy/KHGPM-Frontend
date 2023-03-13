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
      <label>상품 사진 업로드</label>
      <div> 
        <input
          type="file"
          id="files"
          ref="files"
          multiple
          @change="handleFileUpload"
        />
      </div>
      <button type="submit">상품등록하기</button>
      <router-link to="{ name: 'ShopListPage' }"> 취소 </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '상품명',
      description: 'blah blah blah',
      price: 12345,
      files: ''
    };
  },
  methods: {
    registerProduct() {
      const { name, description, price, files } = this;
      this.$emit('submit', { name, description, price, files });
    },
    handleFileUpload() {
      this.files = this.$refs.files.files
    },
  },
};
</script>
