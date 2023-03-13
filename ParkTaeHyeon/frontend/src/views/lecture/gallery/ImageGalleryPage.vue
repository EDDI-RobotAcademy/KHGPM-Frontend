<template>
    <v-container>
        <v-row>
            <v-col v-for="image in images" :key="image" cols="3">
                <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="gray lighten-5"/>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
        <!-- 보편적으로 프로젝트 진행 하는 상황에서 제일 많이 경험하는 문제 -->
        <!-- 이미지를 변수로서 세팅해야하는 경우 -->
        <!-- <v-img :src="require(`@/assets/uploadImgs/${imageName}`)" 
                        aspect-ratio="1" class="grey lighten-2" /> -->
    </v-container>    
</template>

<script>
export default {
    name: "ImageGalleryPage",
    data() {
        return {
            // imageName: "link.jpg",
            images: [
                require('@/assets/uploadImgs/연말정산 5월.png'),
                require('@/assets/uploadImgs/KakaoTalk_20230215_154420722_03.jpg'),
                require('@/assets/uploadImgs/routerview.png'),
                require('@/assets/uploadImgs/vue2.png'),
                require('@/assets/uploadImgs/vue3.png'),
            ]
        }
    }
}
</script>