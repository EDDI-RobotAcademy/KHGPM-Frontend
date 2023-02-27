<template>
    <v-container>
        <!--
            자바로 치면 이런 것.
            public void global-component (Long initial-test) {
                blablabla ~~~~
            }
            global-component(counter);
        -->
        <global-component :initial-test="counter" :increment-value="incValue1"/><br/>
        <global-component :initial-test="start" :increment-value="incValue2"/><br/>
        <global-component v-bind:initial-test="counter" :increment-value="incValue3"/><br/>
                        <!-- v-bind가 생략된 콜론이므로 띄어쓰기에 주의할 것. -->
        <local-component :initial-value="num"/><br/>
        <button @click="plus">클릭해봐!</button>
    </v-container>
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue'

export default {
    name: "ComponentTest",
    components: {
        'local-component': LocalComponent
    }, // 굳이 전역으로 쓸 필요 없는 경우, main.js에 등록하지 않고 여기에 간단히 작성한다.
       // '여기'의 범위는 이 ComponentTest.vue 를 뜻한다.
    data () {
        return {
            // 여기에 있는건 초기값이다.
            // 실제 카운터의 증감은 props로 왔다갔다하는 글로벌컴포넌트 또는 아래의 로컬 메서드에서 이루어진다.
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