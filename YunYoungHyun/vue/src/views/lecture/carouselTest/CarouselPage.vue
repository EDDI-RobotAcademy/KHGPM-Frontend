<template>
    <div class="container">
        <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model">
            <v-carousel-item v-for="(picture, idx) in pictures" :key="idx">
                <v-sheet :height="height" tile>
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="text-h2">
                            <v-img :src="picture.img" :height="height" contain />
                        </div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>

export default {
    name: "CarouselPage",
    data() {
        return {
            model: 0,
            pictures: [
                { img: require("@/assets/uploadImgs/img1.jpg") },
                { img: require("@/assets/uploadImgs/img2.jpg") },
                { img: require("@/assets/uploadImgs/img3.jpg") },
            ],
            cycle: true,
            interval: 2500,  // ms 단위
            height: 400
        }
    }
}

</script>

<style>

</style>