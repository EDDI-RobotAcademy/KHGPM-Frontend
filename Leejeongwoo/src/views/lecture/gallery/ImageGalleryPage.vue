<template>
  <v-container>
    <v-card class="black-bg" v-if="showPreview">
      <v-card-text class="preview-container" @click="showPreview = false">
        <v-img :src="previewImage" aspect-ratio="1" class="white-bg">
          <template v-slot:placeholder>
            <v-progress-circular indeterminate color="lighten-5-grey"/>
          </template>
        </v-img>
      </v-card-text>
    </v-card>
    <v-row>
      <v-col v-for="(image, idx) in images" :key="idx" cols="3">
        <v-img :src="image" aspect-ratio="1" class="light gray-2" @click="previewImage = image; showPreview = true">
          <template v-slot:placeholder>
            <v-progress-circular indeterminate color="lighten-5-grey"/>
          </template>
        </v-img>
      </v-col>
    </v-row>

  </v-container>
</template>
<!-- 보편적으로 플젝을 하는 상황에서 제일 많이 경험하는 문제 파트임 -->
<!-- <v-img :src="require(`@/assets/uploadImgs/${imageName}`)" 
        aspect-ratio="1" class="grey lighten-2"/> -->

<script>
export default {
  name: "ImageGalleryPage",
  data() {
    return {
      // imageread: false,
      // imageName: "link.jpg",
      images: [
        require('@/assets/uploadImgs/하민1.jpg'), 
        require('@/assets/uploadImgs/하민2.jpg'),
        require('@/assets/uploadImgs/하민3.jpg'),
        require('@/assets/uploadImgs/하민4.jpg'),
        require('@/assets/uploadImgs/하민5.jpg'),
        require('@/assets/uploadImgs/하민6.jpg'),
        require('@/assets/uploadImgs/하민7.jpg'),
        require('@/assets/uploadImgs/하민1.jpg'),
        require('@/assets/uploadImgs/하민2.jpg'),
        require('@/assets/uploadImgs/하민3.jpg'),
        require('@/assets/uploadImgs/하민4.jpg'),
        require('@/assets/uploadImgs/하민5.jpg'),
        require('@/assets/uploadImgs/하민6.jpg'),
        require('@/assets/uploadImgs/하민7.jpg'),
        require('@/assets/uploadImgs/하민1.jpg'),
        require('@/assets/uploadImgs/하민2.jpg'),
        require('@/assets/uploadImgs/하민3.jpg'),
        require('@/assets/uploadImgs/하민4.jpg'),
        require('@/assets/uploadImgs/하민5.jpg'),
        require('@/assets/uploadImgs/하민6.jpg'),
        require('@/assets/uploadImgs/하민7.jpg'),
      ],
      showPreview: false,
      previewImage: ""
    }
  }
}
</script>

<style scoped>
.preview-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 9999;
  max-width: 800px; /* adjust the value as needed */
  margin: auto;
}
</style>x