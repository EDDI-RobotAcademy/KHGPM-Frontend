<template>
    <div class="container">
        <v-row>
            <v-col v-for="image in images" :key="image" cols="3">
                <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
                    <!-- v-img 가 없을 때. 로딩중...  -->
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten"/>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
        <!-- 보편적으로 프젝을 하는 상황에서 제일 많이 경험하는 문제 파트임 -->
        <v-img :src="require(`@/assets/uploadImgs/${imageName}`)" aspect-ratio="1" class="grey lighten-2"/>
    </div>
</template>

<script>

export default {
    name: "ImageGalleryPage",
    data() {
        return {
            imageName: 'img1.jpg',
            images: [
                require('@/assets/uploadImgs/img1.jpg'),
                require('@/assets/uploadImgs/img2.jpg'),
                require('@/assets/uploadImgs/img3.jpg'),
                require('@/assets/uploadImgs/img1.jpg'),
                require('@/assets/uploadImgs/img2.jpg'),
                require('@/assets/uploadImgs/img3.jpg'),
                require('@/assets/uploadImgs/img1.jpg'),
                require('@/assets/uploadImgs/img2.jpg'),
                require('@/assets/uploadImgs/img3.jpg'),
            ]
        }
    }
}

</script>

<style>

</style>