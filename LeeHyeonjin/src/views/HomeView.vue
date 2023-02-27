<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/board-game">오목게임 과제</router-link>
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
