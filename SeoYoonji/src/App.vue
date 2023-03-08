<template>
  <v-app>
    <navigation-view/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationView from './views/lecture/navigation/NavigationView.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavigationView
  }
};
</script>
