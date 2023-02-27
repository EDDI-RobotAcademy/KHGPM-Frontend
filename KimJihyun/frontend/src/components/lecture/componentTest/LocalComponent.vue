<template>
    <div>
      {{ initialValue }}
    </div>
  </template>
  
  <script>
  export default {
      name: "LocalComponent",
      props: { //인자를 받는 역할
          initialValue: Number //JS 내 변수 타입
      }
  }
  </script>
  
  <style>
  </style>