<template>
    <v-container>
      <v-row>
        <v-col v-for="image in images" :key="image" cols="3">
          <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"/>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  
  export default {
      name: "ImageGalleryPage",
      data () {
          return {
              images: [
                //   require('@/assets/uploadImgs/스크린샷(99).png'),
                //   require('@/assets/uploadImgs/스크린샷(102).png'),
                //   require('@/assets/uploadImgs/스크린샷(103).png'),
                //   require('@/assets/uploadImgs/스크린샷(104).png'),
                //   require('@/assets/uploadImgs/스크린샷(105).png'),
                //   require('@/assets/uploadImgs/스크린샷(106).png')
                require('@/assets/uploadImgs/스크린샷(106).png')
              ]
          }
      }
  }
  
  </script>
  
  <style>
  
  </style>