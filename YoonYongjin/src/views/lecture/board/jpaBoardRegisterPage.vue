<template>
    <v-container>
      <h2>게시글 작성</h2>
      <jap-board-register-form @submit="noSubmit"/>
    </v-container>
  </template>
  
  <script>
  
  export default {
      name: "JpaBoardRegisterPage", 
  }
  </script>
  
  <style>
  
  </style>