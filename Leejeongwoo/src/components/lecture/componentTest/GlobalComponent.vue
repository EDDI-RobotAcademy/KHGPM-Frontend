<template>
    <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>
export default {
    name: "GlobalComponent",
    // initial-test
    props: ['initialTest', 'incrementValue'],
    data () {
        return {
            counterValue: this.initialTest,
            incValue: this.incrementValue
        }
    },
    methods: {
        addCounter () {
            this.counterValue += this.incValue
            //       100      +=       1
            //       100      +=       2
            //       100      +=       3

        }
    }
}
</script>

<style>
</style>