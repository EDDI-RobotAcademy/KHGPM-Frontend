<template>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>상품명</td>
          <td>
            <input type="text" v-model="name"/>
          </td>
        </tr>
        <tr>
          <td>가격</td>
          <td>
            <input type="text" v-model="price"/>
          </td>
        </tr>
      </table>
  
      <div>
        <button type="submit">등록</button>
        <router-link to="{ name: 'JpaProductListPage' }">
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
              name: '상품명을 입력하세요.',
              price: '가격을 입력하세요'
          }
      },
      methods: {
          onSubmit () {
              const { name, price } = this
              this.$emit('submit', { name, price })
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>