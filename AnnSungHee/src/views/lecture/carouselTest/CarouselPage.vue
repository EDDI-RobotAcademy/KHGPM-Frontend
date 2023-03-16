<template>
    <v-container>
      <div>
        <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model">
          <v-carousel-item v-for="(picture, idx) in pictures" :key="idx">
            <v-sheet :height="height" tile>
              <v-row class="fill-height" align="center" justify="center">
                <div class="text-h2">
                  <v-img :src="picture.img" :height="height" contain/>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </template>
  
  <script>
  
  export default {
      name: "CarouselPage",
      data () {
          return {
              model: 0,
              pictures: [
                  { img: require("@/assets/carousel/KakaoTalk_20230223_174327649.png") },
                  { img: require("@/assets/carousel/src.png") },
                  { img: require("@/assets/carousel/스크린샷(99).png") },
              ],
              cycle: true,
              interval: 2500, // ms 단위
              height: 1500,
          }
      }
  }
  
  </script>
  
  <style>
  /* 
  :cycle="cycle" 사진의 끝까지 지나가면 다시 돌아오게 해줌 (true, or false) 
  :interval="interval" 사진이 자동으로 넘어가는 시간을 설정 ms 기준
  :height="height" 높이 설정
  v-model="model" 현재 사진의 인덱스 설정 기본값 0으로 초기화
  <v-sheet> v-sheet은 높이와 폭을 설정할수 있다.
  :height="height" 해당 태그가 감싸고 있는 높이를 height로 설정한다.
  tile은 이미지가 타일링 배치되도록 설정한다.
  contain 속성은 이미지가 해당 요소에 맞게 조정되도록 해주는 역할
  */
  </style>