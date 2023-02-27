<template>
  <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>
export default {
    name: "GlobalComponent",
    //initial-test 네이밍규칙 헝가리안표기식?
    props: ['initialTest', 'incrementValue'],
    data (){
        return{
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