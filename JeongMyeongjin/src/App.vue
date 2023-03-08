<template>
  <v-app>
    <navigation-menu-page/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<script>

import NavigationMenuPage from './views/lecture/navigation/NavigationMenuPage.vue';
 //import NavigationView from './views/lecture/navigation/NavigationView.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    NavigationMenuPage
  }
};
</script>