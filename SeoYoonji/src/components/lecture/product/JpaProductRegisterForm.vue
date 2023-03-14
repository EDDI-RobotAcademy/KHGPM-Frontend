<template>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <table>
          <tr>
              <td>제품명</td>
              <td>
                  <input type="text" v-model="title"/>
              </td>
          </tr>
          <tr>
              <td>가격</td>
              <td>
                  <input type="int" v-model="price"/>
              </td>
          </tr>
          <tr>
              <td>상세정보</td>
              <td>
                  <textarea cols="30" rows="10" v-model="detail"/>
              </td>
          </tr>
          <tr>
            <td>상품 사진</td>
            <td>
                  <input type="file" id="productImgs" ref="productImgs" multiple @change="handleFileUpload"/>
            </td>
        </tr>
      </table>
  
      <div>
          <button @click="onSubmit">등록</button>
          <router-link :to="{ name: 'JpaProductListPage' }">
              취소
          </router-link>
      </div>
    </form>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
      name: "JpaProductRegisterForm",
      data () {
          return {
              title: '제품명을 입력하세요.',
              price: '가격을 입력하세요.',
              detail: '상세 정보를 입력하세요.',
          }
      },
      methods: {
          handleFileUpload () {
            this.productImgs = this.$refs.productImgs.files
          },
          onSubmit () {
              let formData = new FormData()
              let fileinfo = { title: this.title, price: this.price, detail: this.detail }
              for(let idx = 0; idx < this.productImgs.length; idx++) {
                  formData.append('productImgList', this.productImgs[idx])
                }
              formData.append("info", new Blob([JSON.stringify(fileinfo)], { type: "application/json" }))
              axios.post('http://localhost:7777/product/register', formData)
                .then (res => {
                    alert('처리 결과: ' + res.data)
                    this.$emit('submit', formData)
                })
                .catch(() => {
                    alert('문제 발생!')
                })
            }
      }
  }
  </script>
  
  <style>
  
  </style>