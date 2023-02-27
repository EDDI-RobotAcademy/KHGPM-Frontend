<template>
    <v-container>
      <span>1개씩 증가</span> &nbsp;&nbsp;&nbsp;   <global-component :initial-test="zero" :add="counter" id="bt1"/><br>
      <span>2개씩 증가</span>  &nbsp;&nbsp;&nbsp; <global-component :initial-test="zero" :add="value" id="bt1"/><br>
      <span>홀수</span>   &nbsp;&nbsp;&nbsp;  <global-component :initial-test="counter" :add="value" id="bt1"/><br>
      <span>1개씩 감소</span>  &nbsp;&nbsp;&nbsp;  <global-component :initial-test="zero" :add="value2" id="bt1"/><br>
      <button>클릭해봐</button>
        <hr>
      <local-component :initial-value="num"/>
      <local-component :initial-value="num2"/>
      <local-component :initial-value="num3"/>
        <button @click="plus">클릭해봐</button>
    </v-container>
  </template>
  
  

  <script>
   import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue'
  
   export default {
      name: "ComponentTest",
      components:{
        'local-component' : LocalComponent
      },
      data () {
          return {
             zero: 0,
              counter: 1,
              value : 2,
              value2 : -1,
              num : 1,
              num2 : 0,
              num3 : 0,
          }
      },
      methods: {
        plus () {
            this.num = this.num +1;
            this.num2 = this.num2 + 2;
            this.num3 = this.num3 - 1;
        }
      }
  }
  </script>
  
  <style>
  
  </style>