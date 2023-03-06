<template>
  <v-container>
    <!--
        public void global-component (Long initial-test) {
            blablabla ~~~~
        }

        global-component(counter);
    -->
    <global-component :initial-test="counter" :increment-value="incValue1"/><br/>
    <global-component :initial-test="start" :increment-value="incValue2"/><br/>
    <global-component v-bind:initial-test="counter" :increment-value="incValue3"/><br/>

    <local-component :initial-value="num"/><br/>
    <button @click="plus">클릭해바바</button>
  </v-container>
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue'

export default {
    name: "ComponentTest",
    components: {
        'local-component': LocalComponent
    },
    data () {
        return {
            counter: 0,
            start: 100,
            incValue1: 1,
            incValue2: 2,
            incValue3: 3,
            num: 33,
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