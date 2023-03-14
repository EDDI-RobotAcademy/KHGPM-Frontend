<template>
    <v-container>
      <div>
        <h2>{{ message }}</h2>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "LifeCyclePage",
    data: {
      message: 'Hello Vue.js',
    },
    beforeCreate: function () {
      alert('Before Create')
    },
    created: function () {
      alert('Created')
    },
    beforeMount: function () {
      alert('Before Mount')
    },
    mounted: function () {
      alert('Mounted')
    },
    beforeUpdate: function () {
      alert('Before Update')
    },
    updated: function () {
      alert('Updated')
    },
    beforeDestroy: function () {
      alert('Before Destroy')
    },
    destroyed: function () {
      alert('Destroyed')
    }
  }
  </script>
  
  <style scoped>
  
  </style>