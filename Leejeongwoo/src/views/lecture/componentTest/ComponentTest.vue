<template>
<v-container>
    <global-component :initialTest="counter" :incrementValue="incValue1"/>  <mark>(클릭시 +1)</mark><br/>
    <global-component :initial-test="start" :increment-value="incValue2"/>  <mark>(클릭시 +2)</mark><br/>
    <global-component v-bind:initial-test="counter" :increment-value="incValue3"/>  <mark>(클릭시 +3)</mark><br/>

    <local-component :initialValue="num"/><br/>
    <button @click="plus">클릭해봐!</button>
</v-container>
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent'
export default {
    name: "ComponentTest",
    components: {
        'local-component': LocalComponent
    },
    data () {
        return {
            counter: 100,
            start: 100,
            num: 50,
            
            incValue1: 1,
            incValue2: 2,
            incValue3: 3,
        }
    },
    methods: {
        plus () {
            this.num++
        }
    }
}
</script>

<style>
</style>