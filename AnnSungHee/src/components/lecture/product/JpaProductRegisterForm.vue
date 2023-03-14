<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>상품명</td>
        <td>
          <input type="text" v-model="productName"/>
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" v-model="writer"/>
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <textarea cols="50" rows="20" v-model="content"/>
        </td>
      </tr>
      <tr>
        <td>가격</td>
        <td>
          <input type="number" v-model="price"/>
        </td>
      </tr>
      <tr>
        <td>이미지</td>
        <td>
          <input type="file" id="files" ref="files" multiple @change="handleFileUpload"/>
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <router-link :to="{ name: 'JpaProductListPage' }">
        취소
      </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: "JpaBoardRegisterForm",
    data () {
        return {
            productName: '상품명을 입력하세요.',
            writer: '누구세요 ?',
            content: '내용을 입력하세요.',
            price: 0,
            file: null
        }
    },
    methods: {
        onSubmit () {
            // const { productName, writer, content, price } = this
            // this.$emit('submit', { productName, writer, content, price })
            const formData = new FormData()
            for (let idx = 0; idx < this.files.length; idx++) {
                  formData.append('fileList', this.files[idx])
              }
            formData.append(
                "productInfo",
                new Blob([JSON.stringify(fileinfo)], { type: "application/json" })
            )
            formData.append('productName', this.productName)
            formData.append('writer', this.writer)
            formData.append('content', this.content)
            formData.append('price', this.price)
            this.$emit('submit', formData)
          },
          handleFileUpload(event) {
            this.files = this.$refs.files.files
          }
    }
}

</script>

<style>

</style>