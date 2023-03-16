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
          <input type="file" id="files" ref="files"
              multiple @change="handleFileUpload"/>
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
              files: '',
          }
      },
      methods: {
        handleFileUpload () {
              this.files = this.$refs.files.files
        },
        onSubmit () {
          let formData = new FormData()
          let productInfo = {
          productName: this.productName,
          writer: this.writer,
          content: this.content,
          price: this.price,
        }

        // 사진
        for (let idx = 0; idx < this.files.length; idx++) {
          formData.append('fileList', this.files[idx])
        }
        // 글자
        formData.append(
          "productInfo",
          new Blob([JSON.stringify(productInfo)], { type: "application/json" })
        )
        
        this.$emit('submit', formData)
      }
    }
  }
  </script>
  
  <style>
  </style>