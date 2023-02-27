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
    <global-component v-bind:initial-test="counter" :increment-value="incValue3"/><br/><br/>

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
    data () {
        return {
            counter: 0,
            start: 100,
            incValue1: 1,
            incValue2: 2,
            incValue3: 3,
            num: 33,
            num2: 77,
        }
    },
    methods: {
        plus () {
            this.num++
            this.num2 += 3
        }
    }
}

</script>

<style>

</style>