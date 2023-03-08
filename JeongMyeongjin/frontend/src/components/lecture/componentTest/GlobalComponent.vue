<template>
  <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>

export default {
    name: "GlobalComponent",
    props: ['initialTest', 'option'],
    data() {
        return {
            counterValue: this.initialTest,
            incValue: this.option,
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