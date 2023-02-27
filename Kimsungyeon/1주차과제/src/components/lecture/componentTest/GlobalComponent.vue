<template>
    <button @click="addCounter">{{ counterValue }}</button>

</template>

<script>

export default {
    name: "GlobalComponent",
    props: ['initialTest','add'],
    data () {
        return {
            counterValue: this.initialTest,
            incvalue : this.add,
        }
    },
    methods: {
        addCounter () {
            this.counterValue += this.incvalue
        }
    }
}

</script>

<style>

</style>