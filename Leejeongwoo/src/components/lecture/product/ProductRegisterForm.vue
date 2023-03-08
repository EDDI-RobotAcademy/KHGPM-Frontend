<template>
  <v-container>
  <form @submit.prevent="onSubmit">
    <div class="div">
    <table>
      <tr>
        <td>상품이름</td>
        <td>
          <input type="text" v-model="productName"/>
        </td>
      </tr>
      <tr>
        <td>카테고리</td>
        <td>
          <input type="text" v-model="productKategorie"/>
        </td>
      </tr>
      <tr>
        <td>상품 설명</td>
        <td>
          <textarea cols="50" rows="20" v-model="productContent"/>
        </td>
      </tr>
      <tr>
        <td>브랜드</td>
        <td>
            <input type="text" v-model="productBrand"/>
        </td>
    </tr>
      <tr>
        <td>가격</td>
        <td>
          <input type="text" v-model="productPrice"/>
        </td>
      </tr>
    </table>
  </div>
    <div>
      <button type="submit">등록</button>
      <!-- 취소를 이전페이지인 보드 리스트로 링크 걸어 둔거임 -->
      <router-link :to="{ name: 'ProductListPage'}">
        취소
      </router-link>
    </div>
  </form>
</v-container>
</template>

<script>
export default {
    name: "ProductRegisterForm",
    data () {
        return {
            productName: '상품명을 입력하세요.',
            productKategorie: '카테고리 입력',
            productContent: '내용을 입력하세요.',
            productBrand:'',
            productPrice: 0,
        }
    },
    methods: {
        onSubmit () {
            const { productName, productKategorie, productContent, productBrand, productPrice } = this
            this.$emit('submit', { productName, productKategorie, productContent, productBrand, productPrice })
        }
    }
}
</script>



<!-- <style>

.div{
  display: flex;
  justify-content: center;
}

</style> -->