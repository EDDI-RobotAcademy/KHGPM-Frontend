<template>
  <v-app>
    <navigation-menu-page/>
    <!-- <navigation-menu-page/>는 모든 router에 지정된 뷰들의 최상단에 위치하게 된다. -->
    <v-main>
      <router-view/> 
      <!-- <router-view/> router에 지정된 모든 뷰들을 지칭하는것 -->
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './views/lecture/layoutForm/Footer.vue';
import NavigationMenuPage from './views/lecture/layoutForm/navigation/NavigationMenuPage.vue';
// import NavigationView from './views/lecture/navigation/NavigationView.vue';

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