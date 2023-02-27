<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link to="/click-test">ClickEventTest</router-link> |
        <router-link to="/component-test">ComponentTest</router-link> |
        <router-link to="/emit-test-board-game">EmitTestBoardGame</router-link> |
        <router-link to="/axios-test-page">AxiosTestPage</router-link> |
      </nav>
      <router-view/>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
}
</script>