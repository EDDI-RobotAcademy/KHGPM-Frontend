<template>
    <v-container>
        <div>
            <p>{{ count }} 번 클릭했습니다!</p>
            <!-- <button @click="increment">카운트하기</button> -->
            <button v-on:click="increment">카운트하기</button>
          <!--  -->
        </div>
    </v-container>
</template>

<script>

export default {
  name: 'ClickEventTest',
  data () {
    return {
      //초기값을 0으로 설정해준거임
      count: 0
    }
  },
  methods: {
    //그리고 increment라는 함수를 만들었고 클릭시 2씩 증가
    increment () {
      this.count += 2
    }
  }
}

</script>