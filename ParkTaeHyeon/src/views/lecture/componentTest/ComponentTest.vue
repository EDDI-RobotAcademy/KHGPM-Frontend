<template>
    <v-container>
    <global-component :initial-test="counter" :increment-value="incValue1"/><br/>
    <global-component :initial-test="start" :increment-value="incValue2"/><br/>
    <global-component v-bind:initial-test="counter" :increment-value="incValue3"/><br/>
    
    <br>
    <local-component :initial-value="num"/>
    <local-component :initial-value="num"/>
    <button v-on:click="plus">클릭해봐!</button>
    </v-container>
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue'

export default {
    name: "ComponentTest",
    // name은 클래스명과 동일하게 지정
    components: {
        'local-component': LocalComponent
        // local-component는 local-component 태그와 매치시켜준 것
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