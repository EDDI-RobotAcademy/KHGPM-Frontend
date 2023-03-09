<template>
  <v-footer app inset padless class="justify-center pl-0">
    <v-card flat class="text-center" width="100%">
        <v-card-text>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
                <v-icon size="24px">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
            망고요구르트
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
            {{ new Date().getFullYear() }} -
            <strong>YOONJI</strong>
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
        ]
    })
}
</script>

<style>

</style>