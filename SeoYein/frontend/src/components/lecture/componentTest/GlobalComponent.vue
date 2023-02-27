<template>
   <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>

export default {
    name: "GlobalComponent",
    props: ['initialTest', 'incrementValue'],
    // initial-test 가 헝가리안 표기법 네이밍규칙상 위처럼 initialTest 가 된다.
    data () {
        return {
            counterValue: this.initialTest,
            incValue: this.incrementValue
        }
    },
    methods: {
        addCounter () {
            this.counterValue += this.incValue
            // 실제 카운터의 증감은 여기서 이루어진다.
        }
    }
}
</script>

<style>

</style>