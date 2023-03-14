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
          <button type="submit">등록</button>
          <router-link :to="{ name: 'JpaProductListPage' }">
              취소
          </router-link>
      </div>
    </form>
  </template>
  
  <script>

  export default {
      name: "JpaProductRegisterForm",
      data () {
          return {
              title: '제품명을 입력하세요.',
              price: 0,
              detail: '상세 정보를 입력하세요.',
              productImgs: '',
          }
      },
      methods: {
          handleFileUpload () {
            this.productImgs = this.$refs.productImgs.files
          },
          onSubmit () {
              let formData = new FormData()
              for(let idx = 0; idx < this.productImgs.length; idx++) {
                  formData.append('productImgList', this.productImgs[idx])
                }
              const { title, price, detail } = this
              let productInfo = {
                title: title,
                price: price,
                detail: detail,
              }
              console.log('productInfo: ' + JSON.stringify(productInfo))
              formData.append("productInfo", new Blob([JSON.stringify(productInfo)], { type: "application/json" }))
              this.$emit('submit', formData)  
            }
      }
  }
  </script>
  
  <style>
  
  </style>