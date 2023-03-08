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
import NavigationView from './views/lecture/layoutForm/navigation/NavigationView.vue';
import NavigationMenuPage from '@/views/lecture/layoutForm/navigation/NavigationMenuPage.vue';
import Footer from '@/views/lecture/layoutForm/Footer.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    //NavigationView
    NavigationMenuPage,
    Footer
  }
};
</script>
