이정우
<template>
  <v-container>
    <div>
      <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model" hide-delimiters>
        <v-carousel-item v-for="(picture, idx) in pictures" :key="idx" class="d=flex">
          <v-sheet :height="height" tile >
            <v-row class="fill-height" align="center" justify="center" >
              <div class="text-h2" >
                <v-img :src="picture.img" :height="400" contain />
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
</template>

<script>

export default {
    name: "CarouselPage",
    data () {
        return {
            model: 0,
            pictures: [
              { img: require("@/assets/carousel/img2.jpg") },
              { img: require("@/assets/carousel/img1.jpg") },
              { img: require("@/assets/carousel/img3.jpg") },
              { img: require("@/assets/carousel/img6.jpg") },
              { img: require("@/assets/carousel/img7.jpg") },
              { img: require("@/assets/carousel/img8.jpg") },
            ],
            cycle: true,
            interval: 2500, // ms 단위
            height: 800,
        }
    }
}

</script>
<!-- .v-icon notranslate mdi mdi-chevron-left theme--dark { -->

<style scoped>
.my-carousel .v-window__controls {
  display: none;
}

</style>