<template>
  <v-container>
   <v-row>
      <v-col v-for="(image, idx) in images" :key="idx" cols="3">
         <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder> <!-- 로딩중 역할 -->
               <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"/>
               </v-row>
            </template>
         </v-img>
      </v-col>
   </v-row>
   <!-- 보편적으로 플젝을 하는 상황에서 제일 많이 경험하는 문제 -->
   <!-- aspect-ratio : 이미지의 종횡비율 정의(1로 설정 -> 높이, 너비 동일)-->
   <v-img :src="require(`@/assets/uploadImgs/${imageName}`)" aspect-ratio="1" class="grey lighten-2"/>
  </v-container>
</template>

<script>
export default {
   name: "ImageGalleryPage",
   data() {
      return {
         imageName: "img1.png",
         images: [ // require -> 사진 가져올때 사용하는 문법
            require('@/assets/uploadImgs/img1.png'),
            require('@/assets/uploadImgs/img2.jpg'),
            require('@/assets/uploadImgs/img3.png'),
            require('@/assets/uploadImgs/img1.png'),
            require('@/assets/uploadImgs/img2.jpg'),
            require('@/assets/uploadImgs/img3.png'),
         ]
      }
   },

}
</script>

<style>

</style>