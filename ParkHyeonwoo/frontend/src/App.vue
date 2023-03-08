<template>
  <v-app>
    <navigation-menu-page/> <!-- 프로젝트 내 모든 Vue 파일에 적용된다. -->
    <v-main>
      <router-view/> <!-- HomeView.vue 와 비슷한 기능을 한다고 생각 -->
    </v-main>
  </v-app>
</template>

<script>
import NavigationMenuPage from './views/lecture/navigation/NavigationMenuPage.vue';

// import NavigationView from './views/lecture/navigation/NavigationView.vue';

export default {
  components: { NavigationMenuPage },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>