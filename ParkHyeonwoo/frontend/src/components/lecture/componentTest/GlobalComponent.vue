<template>
  <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>
export default {
   name: "GlobalComponent", // global-component
   props: ['initialTest', 'incrementValue'], // initial-test, increment-value
   data() {
      return {
         counterValue: this.initialTest,
         incValue: this.incrementValue
      }
   },
   methods: {
      addCounter() {
         this.counterValue += this.incValue
      }
   }
}
</script>

<style>

</style>