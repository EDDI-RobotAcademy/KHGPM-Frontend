<template>
  <nav>
    <v-app-bar color="dark" class="flex-grow-0" app dark >
      <v-app-bar-nav-icon  @click="navigation_drawer = !navigation_drawer" />

      <v-toolbar-title class="text-uppercase text--darken-4">
        <router-link :to="{ name: 'home' }" style=" text-decoration: none; color: white; text-decoration-line: underline;
          text-decoration-style: double;
        };">
          Vue + Spring + JPA
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isTrue == true" text @click="clickToggle">
        <span>login</span>
        <v-icon right>mdi-test-tube</v-icon>
      </v-btn>
      <v-btn v-else text @click="clickToggle">
        <span>logout</span>
        <v-icon right>mdi-history</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="navigation_drawer">
      <v-list-item >
        <v-list-item-content>
          <div class="div">
          <v-img class="mx-2" src="@/assets/uploadImgs/Navy.jpg"
            max-height="40" max-width="40" contain/>
          <v-list-item-title class="text-h6">thejaden</v-list-item-title>
          <v-list-item-subtitle> leejeongpop@gmail.com </v-list-item-subtitle>
        </div>
        </v-list-item-content>
      </v-list-item>
      <v-list nav dense>
        <v-list-item v-for="link in links" :key="link.name" router :to="link.route">
          <v-list-item-action>
            <v-icon left>
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import router from "@/router"
export default {
  name: "NavigationMenuPage",
  data() {
    return {
      isTrue: false,
      navigation_drawer: false,
      links: [
        { icon: 'mdi-home', text: 'Home', name: 'home', route: '/' },
        {icon: 'mdi-share-variant-outline', text: 'Sharing', name: 'JpaBoardListPage', route: '/board-list-page'
        },
        {icon: 'mdi-account-school', text: 'Practice', name: 'Practive', route: '/practive'},
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ]
    }
  },
  methods: {
    clickToggle() {
      this.isTrue = !this.isTrue
    },
  },
}
</script>

<style scoped>
.div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>