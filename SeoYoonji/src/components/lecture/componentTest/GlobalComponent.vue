<template>
  <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>

export default {
    // global-component
    name: "GlobalComponent",
    props: ['initialTest', 'incrementValue'], //vue 끼리 데이터를 주고받을 때 props 사용
    data () {
        return {
            counterValue: this.initialTest,
            incValue: this.incrementValue
        }
    },
    methods: {
        addCounter () {
            this.counterValue += this.incValue
        }
    }
}    
</script>

<style>

</style>