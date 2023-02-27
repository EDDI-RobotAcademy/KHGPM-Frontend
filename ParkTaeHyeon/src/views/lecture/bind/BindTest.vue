<template>
    <v-container>
        <div>
            <p>HTML {{ message }}</p>
            <p>HTML : 이렇게 HTML과 + {{ msg }}</p>
            <p>Hello {{ list[number] }}</p>
        </div>
    </v-container>
</template>

<!-- 중괄호 2개 : 데이터와의 맵핑 -->
<!-- v-container UI에 대한 황금비율 마진을 설정해준다. -->

<script>
export default {
    name: 'BindTest',
    data () {
        return {
            message: "+ Script의 조합",
            msg: " javascript를 변수화하여 연결 할 수 있습니다.",
            list: ['apple', 'banana', 'grape', 'watermelon'],
            number: 1,
        }
    }
}
</script>

<!-- 자바 스크립트와 HTML이 묶이는 것이 가능하다. -->
