<template>
  <v-container>
   <div>
      <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model">
         <v-carousel-item v-for="(picture, idx) in pictures" :key="idx">
            <v-sheet :height="height" tile>
               <v-row class="file-height" align="center" justify="center">
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
   data() {
      return {
         model: 1, // 첫번째로 사용자에게 보여줄 이미지
         pictures: [
            { img: require("@/assets/carousel/img1.png")},
            { img: require("@/assets/carousel/img2.jpg")},
            { img: require("@/assets/carousel/img3.png")},
         ],
         cycle: true,
         interval: 2500, // ms 단위(2.5초)
         height: 700,
      }
   }

}
</script>

<style>

</style>