<template>
  <v-container>
    <form @submit.prevent="onSubmit">
      <div class="div">
        <table>
          <tr>
            <td>상품이름</td>
            <td>
              <input type="text" v-model="productName" />
            </td>
          </tr>
          <tr>
            <td>카테고리</td>
            <td>
              <input type="text" v-model="kategorie" />
            </td>
          </tr>
          <tr>
            <td>상품 설명</td>
            <td>
              <textarea cols="50" rows="10" v-model="content" />
            </td>
          </tr>
          <tr>
            <td>브랜드</td>
            <td>
              <input type="text" v-model="brand" />
            </td>
          </tr>
          <tr>
            <td>가격</td>
            <td>
              <input type="number" v-model="price" />
            </td>
          </tr>
          <tr>
            <td>사진 등록</td>
            <td>
              <input type="file" id="files" ref="files" multiple @change="handleFileUpload" />
            </td>
          </tr>
        </table>
      </div>
      <div>
        <div class="button">
          <v-btn type="submit" color="blue">등록</v-btn>
          <!-- 취소를 이전페이지인 보드 리스트로 링크 걸어 둔거임 -->
          <router-link :to="{ name: 'ProductListPage' }">
            <v-btn color="red">취소</v-btn>
          </router-link>
        </div>
      </div>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "ProductRegisterForm",
  data() {
    return {
      productName: '상품명 입력',
      kategorie: '카테고리 입력',
      content: '내용 입력',
      brand: '브랜드 입력',
      price: 10000,
      files: '',
    }
  },
  methods: {
    handleFileUpload() {
      this.files = this.$refs.files.files
    },
    onSubmit() {
      let formData = new FormData()
      const { productName, kategorie, content, brand, price } = this
      let productInfo = {
        productName: productName,
        kategorie: kategorie,
        content: content,
        brand: brand,
        price: price,
      }
        //사진
        for (let idx = 0; idx < this.files.length; idx++) {
          formData.append('fileList', this.files[idx])
        }
      console.log('productInfo: ' + JSON.stringify(productInfo))

      //글자
      formData.append(
        "productInfo",
        new Blob([JSON.stringify(productInfo)], { type: "application/json" })
      )
      for (let value of formData.values()) {
                console.log(value);
            }
      this.$emit('submit', formData)
    },

  }
}
</script>


<style scoped>
a {
  text-decoration: none;
}

.div {
  display: flex;
  justify-content: center;
}

table {
  border-collapse: collapse;
  border: 2px solid black;
  margin-bottom: 5px;
}

td {
  padding: 5px;
  border: 2px solid black;
}

.button {
  margin-top: 5px;
}
</style>