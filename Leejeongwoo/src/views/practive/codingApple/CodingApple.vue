<template>
  <v-container>
    <div class="black-bg" v-if="모달창열렸니 = true">
      <div v-for="(room, index) in 원룸들" :key="index" class="white-bg">
        <h4>{{ room.title }}</h4>
        <p>{{ room.content }}</p>
        <button style="border-style: groove;" @click="모달창열렸니 = false">닫기</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(작명, index) in 메뉴들" :key="index"> {{ 작명 }} </a>
    </div>
    <!-- <div v-for="(작명, index) in products" :key="index">
    <h4>{{ 작명 }}</h4>
    <p>50만원</p>
  </div> 반복문 사용 연습-->

    <!-- <div>
    <img src="./room0.jpg" class="room-img">
    <h4 @click="모달창열렸니 = true">{{ data[0]}}</h4>
    <p>50만원</p>
    <button style="border-style: groove;" @click="신고수[0]++">허위매물 신고</button>
    <span>     신고수 : {{신고수[0]}} </span>
  </div> 모달창, 신고수 이벤트 연습-->


    <!-- <div>
    <img :src="원룸들[0].image" class="room-img">
    <h4>{{ 원룸들[0].title }}</h4>
    <p>{{ 원룸들[0].price }}$</p>
  </div> -->
      <div v-for="(room, index) in 원룸들" :key="index">
        <img :src="room.image" class="room-img">
        <h4 @click="room.모달창열렸니 = false">{{ room.title }}</h4>
        <p>{{ room.price }}$</p>
        <button style="border-style: ridge;" @click="room.추천수++">추천</button>
        <span> 추천 수 : {{ room.추천수 }}</span>
      </div>



  </v-container>
</template>

<script>

import data from './room';
data
export default {
  name: 'OneRoom',
  data() {
    return {
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0, 0, 0, 0],
      메뉴들: ['Home', 'Shope', 'About'],
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
    }
  },
  components: {

  },
  methods: {
    incrementCount(index) {
      this.신고수[index]++;
    }
  }
}
</script>

<style scoped>
* {
  text-align: center;
}

body {
  margin: 0;
  box-sizing: border-box;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.menu a {
  color: aliceblue;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

button {
  border-style: groove;
}</style>