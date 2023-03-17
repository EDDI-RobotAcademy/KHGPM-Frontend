<template>
  <v-app>
    <navigation-menu-page/>
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from '@/views/lecture/layoutForm/Footer.vue';
import NavigationMenuPage from '@/views/lecture/layoutForm/navigation/NavigationMenuPage.vue';
//import NavigationView from '@/views/lecture/layoutForm/navigation/NavigationView.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavigationMenuPage,
    Footer
  },
};
</script>
