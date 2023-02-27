 <!--
       public void global component (Long initial-test){
        ~~~~
       } 
       global-component(counter);
    -->
    <!-- export default 안에 있는 데이터가 매핑된다. -->

<template>
    <v-container>
    <!--<global-component :initial-test="counter"/>-->
    <!-- component는 재사용성, v-bind는 생략가능 -->
    <!-- 전역변수 -->
    <global-component :initial-test="counter" :increment-value="incValue1"/><br/>
    <global-component :initial-test="start" :increment-value="incValue2"/><br/>
    <global-component v-bind:initial-test="counter" :increment-value="incValue3"/><br/>
    <!--지역 변수-->
    <local-component :initial-value="num"/><br/>
    <local-component :initial-value="num2"/><br/>
    <button @click="plus">클릭해봐!</button>
  </v-container>
</template>


<script>
// GlobalComponent를 쓸 때 
// LocalComponent를 쓸 때 import하고, conponents 작성
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