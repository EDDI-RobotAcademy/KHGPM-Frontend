<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link :to="{ name: 'ClickEventTest' }">ClickEventTest</router-link> |
        <router-link :to="{ name: 'ComponentTest' }">ComponentTest</router-link> |   
        <router-link :to="{ name: 'EmitTestBoardGame' }">EmitTestBoardGame</router-link> |
        <router-link :to="{ name: 'AxiosTestPage' }">AxiosTestPage</router-link> |   
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