<template>
  <v-container>
    <div>
      <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model">
        <v-carousel-item v-for="(picture, idx) in pictures" :key="idx">
          <v-sheet :height="height" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                <v-img :src="picture.img" :height="height" contain/>
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
                { img: require("@/assets/carousel/link.jpg") },
                { img: require("@/assets/carousel/mario_game.jpg") },
                { img: require("@/assets/carousel/mario.png") },
            ],
            cycle: true,
            interval: 2500, // ms 단위
            height: 1500,
        }
    }
}

</script>

<style>

</style>