<template>
  <v-app>
    <!-- <NavigationView/> -->
    <!-- <NavigationMenuPage/> -->
    <navigation-menu-page/>
    <v-main>
      <router-view/>
    </v-main>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
// import NavigationView from './views/lecture/layout/navigation/NavigationView.vue';
import NavigationMenuPage from './views/lecture/layout/navigation/NavigationMenuPage.vue';
import Footer from './views/lecture/layout/Footer.vue';

export default {
  name: 'App',
  components: { 
    // NavigationView
    NavigationMenuPage,
    Footer
  },
  data: () => ({
    //
  }),
};

</script>