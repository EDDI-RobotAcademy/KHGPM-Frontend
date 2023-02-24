<template>
  <v-container>
   <h2>Vue에서 Spring으로 데이터 전송하기</h2>
   <axios-test-form @submit="onSubmit"/> <!-- emit 통해서 submit 이벤트 발생 시 onSubmit 함수 실행 -->
  </v-container>
</template>

<script>
import axios from 'axios'
import AxiosTestForm from '@/components/lecture/axiosTest/AxiosTestForm.vue'

export default {
   name: "AxiosTestPage",
   components: { AxiosTestForm },
   methods: {
      onSubmit(payload) {
         const { memberName, major } = payload
         axios.post('http://localhost:7777/vue/first/receive-test', // post 방식으로 url로 데이터를 날림, axios 는 ajax 같은 역할(비동기방식)
            { memberName, major } // memberName, major 전송
         )
         .then(() => {
            alert('데이터 전송 완료!')
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