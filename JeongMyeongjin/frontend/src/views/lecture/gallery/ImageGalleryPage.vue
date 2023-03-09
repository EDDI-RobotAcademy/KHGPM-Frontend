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
                  require('@/assets/uploadImgs/20171225_234934.jpg'),
                  require('@/assets/uploadImgs/IMG_4374.jpg'),
                  require('@/assets/uploadImgs/img.jpg'),
                  ]
         }
     }
 }
 </script>

 <style>
 </style>