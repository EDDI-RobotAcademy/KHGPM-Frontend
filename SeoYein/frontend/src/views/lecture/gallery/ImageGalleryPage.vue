<template>
  <v-container>
    <v-row>
        <v-col v-for="(image, idx) in images" :key="idx" cols="3"> <!-- cols가 3이기 때문에 12나누기3해서 이미지 4개씩 표시-->
            <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder> <!-- 로딩중 뺑글뺑글 표시 나타내기 위한 코드 -->
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
            imageName: "stardewvalley.jpeg",
            images: [
                require('@/assets/uploadImgs/seo.gif'),
                require('@/assets/uploadImgs/link-zelda.gif'),
                require('@/assets/uploadImgs/pikachu.gif'),
                require('@/assets/uploadImgs/sugarnoum.gif'),
                require('@/assets/uploadImgs/hoyoung.gif'),
                require('@/assets/uploadImgs/evan-maple-story.gif'),
                require('@/assets/uploadImgs/junimo-stardew.gif'),
                require('@/assets/uploadImgs/padakmon.gif'),
            ]
        }
    }
}
</script>

<style>

</style>