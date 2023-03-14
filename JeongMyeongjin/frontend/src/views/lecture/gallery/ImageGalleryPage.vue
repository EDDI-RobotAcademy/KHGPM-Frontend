<template>
    <v-container>
      <v-row>
        <v-col v-for="(image, idx) in images" :key="idx" cols="3">
          <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"/>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <!-- 보편적으로 플젝을 하는 상황에서 제일 많이 경험하는 문제 파트임 -->
     <v-img :src="require(`@/assets/uploadImgs/${imageName}`)" 
     aspect-ratio="1" class="grey lighten-2"/>
    </v-container>
  </template>
 
  <script>
  export default {
      name: "ImageGalleryPage",
      data () {
          return {
            imageName: "img.jpg",
            images: [
                require('@/assets/uploadImgs/20171225_234934.jpg'),
                require('@/assets/uploadImgs/IMG_4374.jpg'),
                require('@/assets/uploadImgs/img.jpg'),
                ]
         }
     }
 }
 </script>

 <style scoped>
 </style>