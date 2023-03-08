<template>
  <v-container>
    <v-row>
        <v-col v-for="image in images" :key="image" cols="3">
            <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
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
                require('@/assets/imgs/KakaoTalk_20230308_175848736.jpg')
            ]
        }
    },
}
</script>

<style>

</style>