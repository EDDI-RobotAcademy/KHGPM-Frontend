<template>
  <v-container>
    <global-component :initial-test="counter" :option="value1"/><br>
    <global-component :initial-test="start" :option="value2"/><br/>

    <local-component :initial-value="num"/>
    <local-component :initial-value="num2"/><br/>
    <button @click="plus">클릭해봐!</button>
  </v-container>
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue'

export default {
    name: "ComponentTest",
    components: {
        'local-component': LocalComponent
    },
    data() {
        return{
            counter: 0,
            value1: 1,
            value2: 2,
            start: 100,
            num: 33,
            num2: 77,
        }
    },
    methods: {
        plus() {
            this.num++
            this.num2 += 4
        }
    }
}
</script>

<style>

</style>