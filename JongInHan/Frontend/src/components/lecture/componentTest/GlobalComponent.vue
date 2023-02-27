<template>
    <button @click="addCounter">{{ counterValue }}</button>
    <!-- <local-component :initial-value="gnum1"/><br/> -->
    <!-- <local-component :initial-value="gnum2"/><br/> -->
    <!-- <button @click="plus1">클릭해봐!</button> -->
        
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue'

export default {
    // global-component
    name: "GlobalComponent",
    // initial-test
    props: ['initialTest', 'incrementValue'],
    data () {
        return {
            counterValue: this.initialTest,
            incValue: this.incrementValue,
            // gnum1: this.initialTest,
            // gnum2=2,
        }
    },
    methods: {
        addCounter () {
            this.counterValue += this.incValue
        }
    },
    // methods: {
    //         plus1() {
    //             this.gnum1++
    //             this.gnum2 += 2
    //         }
    //     }
}

</script>

<style>

</style>