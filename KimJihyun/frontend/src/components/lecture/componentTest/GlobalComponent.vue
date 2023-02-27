<template>
    <button @click="addCounter">{{ counterValue }}</button>
</template>

<script>

export default {
    //name과 props는 vue에서 헝가리안 표기법으로 바뀜
    name: "GlobalComponent",
    // 컴포넌트에서 초기화하여 전역변수처럼 쓸 수 있다.
    // 주로 버튼을 재사용하기 위해 컴포넌트를 사용한다.
    // initialTest -> initial-test(헝가리안 표기법:대문자T가 -t로 반환) -> vue에  template에서 사용할 때는 저렇게 됨 
    // props에 따라 다른 기능(여러 기능 가능)
    props: ['initialTest', 'incrementValue'],
    data () {
        return{
            counterValue: this.initialTest,
            incValue : this.incrementValue,
        }
    },
    methods:{
        addCounter () {
            //this.counterValue += 1
            this.counterValue += this.incValue
        }
    }
}
</script>

<style>
</style>