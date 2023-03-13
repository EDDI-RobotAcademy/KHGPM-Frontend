<template>
    <v-footer inset padless class="justify-center pl-0">
    <v-card flat class="text-center" width="100%">
        <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
            {{ icon }}
            </v-icon>
        </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
            인천광역시 중구 중산동 하늘별빛로 112 화성파크드림 APT
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
        {{ new Date().getFullYear() }} -
        <strong>EDDI</strong>
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
