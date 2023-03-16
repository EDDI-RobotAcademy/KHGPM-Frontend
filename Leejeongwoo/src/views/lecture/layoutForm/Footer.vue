<template>
  <v-footer inset padless class="justify-center pl-0">
    <v-card flat class="text-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" style="border-style: none;" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="pt-0">
        정우
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="blue--text">
        {{ new Date().getFullYear() }} -
        <strong>JADEN</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: "Footer",
    data: () => ({
        icons: [
            "mdi-facebook",
            "mdi-twitter",
            "mdi-google-plus",
            "mdi-linkedin",
            "mdi-instagram"
        ]
    })
}
</script>

<style></style>