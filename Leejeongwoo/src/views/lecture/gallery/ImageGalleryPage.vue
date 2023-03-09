<template>
  <v-container>


    <!-- <div class="black-bg" v-if="imageread = true">
      <div v-for="image in images" :key="image" class="white-bg"></div>
      <button @click="imageread = false">닫기</button>
    </div> -->


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
    <!-- <v-img :src="require(`@/assets/uploadImgs/${imageName}`)" 
            aspect-ratio="1" class="grey lighten-2"/> -->
  </v-container>
</template>

<script>
export default {
  name: "ImageGalleryPage",
  data() {
    return {
      // imageread: false,
      images: [
        require('@/assets/uploadImgs/하민1.jpg'),
        require('@/assets/uploadImgs/하민2.jpg'),
        require('@/assets/uploadImgs/하민3.jpg'),
        require('@/assets/uploadImgs/하민4.jpg'),
        require('@/assets/uploadImgs/하민5.jpg'),
        require('@/assets/uploadImgs/하민6.jpg'),
        require('@/assets/uploadImgs/하민1.jpg'),
        require('@/assets/uploadImgs/하민2.jpg'),
        require('@/assets/uploadImgs/하민3.jpg'),
        require('@/assets/uploadImgs/하민4.jpg'),
        require('@/assets/uploadImgs/하민5.jpg'),
        require('@/assets/uploadImgs/하민6.jpg'),
        require('@/assets/uploadImgs/하민1.jpg'),
        require('@/assets/uploadImgs/하민2.jpg'),
        require('@/assets/uploadImgs/하민3.jpg'),
        require('@/assets/uploadImgs/하민4.jpg'),
        require('@/assets/uploadImgs/하민5.jpg'),
        require('@/assets/uploadImgs/하민6.jpg'),
      ]
    }
  }
}
</script>

<style scoped>

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
</style>