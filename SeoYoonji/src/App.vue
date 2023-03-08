<template>
  <v-app>
    <navigation-menu-page/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationView from './views/lecture/navigation/NavigationView.vue';
import NavigationMenuPage from './views/lecture/navigation/NavigationMenuPage.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    //NavigationView
    NavigationMenuPage
  }
};
</script>
