<template>
    <form @submit.prevent="onSubmit">
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
              price: '가격을 입력하세요.',
              detail: '상세 정보를 입력하세요.',
          }
      },
      methods: {
          onSubmit () {
              const { title, price, detail } = this
              this.$emit('submit', { title, price, detail })
          }
      }
  }
  </script>
  
  <style>
  
  </style>