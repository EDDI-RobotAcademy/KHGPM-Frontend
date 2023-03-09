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
  
  </style>