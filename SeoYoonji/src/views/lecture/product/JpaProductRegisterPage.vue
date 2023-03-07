<template>
    <v-container>
      <h2>상품 등록</h2>
      <jpa-product-register-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue';
  import { mapActions } from 'vuex';
  
  export default {
      components: { JpaProductRegisterForm },
      name: "JpaProductRegisterPage",
      methods: {
          ...mapActions ([
              'requestCreateProductToSpring'
          ]), 
          async onSubmit (payload) {     //await 로 쓰레드가 끝내길 기다리게 함
              await this.requestCreateProductToSpring(payload)
              await this.$router.push({  //router 제어하여 리다이렉션
                  name: 'JpaProductListPage'
              })
          }
      }
  }
  </script>
  
  <style>
  
  </style>