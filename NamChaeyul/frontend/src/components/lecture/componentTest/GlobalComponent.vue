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
        }
    }
}

</script>

<style>

</style>