<template>
  <v-container>
    <v-row>
        <v-col v-for="image in images" :key="image" cols="3">
            <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
            <!--가변인자 처리 ``(백틱) 사용. :src="require(`@/assets/imgs/${imageNmae}`)"-->
            <!--state 에 images, image 설정하여 backend에서 넘어오는 이미지 받으면 된다-->    
                <!--로딩중일 때 보여지는 부분-->
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
                require('@/assets/imgs/KakaoTalk_20230308_172908690.jpg'),
                require('@/assets/imgs/KakaoTalk_20230308_175848736.jpg'),
                require('@/assets/imgs/angel.gif'),
                require('@/assets/imgs/abheart.gif'),
                require('@/assets/imgs/k1.gif'),
                require('@/assets/imgs/bird.gif'),
                require('@/assets/imgs/cat.gif'),
            ]
        }
    },
}
</script>

<style>

</style>