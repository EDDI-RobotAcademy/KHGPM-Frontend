<template>
  <v-app>
    <navigation-menu-page/> <!-- 프로젝트 내 모든 Vue 파일에 적용된다. -->
    <v-main>
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/views/lecture/layoutForm/Footer.vue';
import NavigationMenuPage from '@/views/lecture/layoutForm/navigation/NavigationMenuPage.vue';

// import NavigationView from './views/lecture/navigation/NavigationView.vue';

export default {
  components: { NavigationMenuPage, Footer },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>