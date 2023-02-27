<template>
    <form @submit.prevent="onSubmit">
        
        <div>
            <label>승리자 이름: </label>
            <input type="text" v-model="inputName" style="border: 1px solid red;"/>
            <button type="submit">전송</button>
        </div>
    </form>
  </template>
  
  <script>
  export default {
      name: "AxiosForm",
      data () {
          return {
              inputName: '작성하세요',
          }
      },
      methods: {
          onSubmit () {
              const { inputName } = this
              this.$emit('submit', { inputName })
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>