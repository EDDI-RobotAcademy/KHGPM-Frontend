<template>
    <v-container>
      <h2>승자찾기</h2>
      <axios-test-form @submit="onSubmit"/>
    </v-container>
  </template>
  
  <script>
  
  import axios from 'axios'
  import EmitTestBoardGame from '@/views/lecture/emitTest/EmitTestBoardGame.vue'
  
  export default {
      name: "AxiosWinnerTestPage",
      components: {EmitTestBoardGame},
      methods: {
        winner (payload){
            const {winner} =payload
            axios.post('http://localhost:7777/vue/first/winner-test',
             {winner}
            )
        }
      }
  }
  
  </script>
  
  <style>
  
  </style>