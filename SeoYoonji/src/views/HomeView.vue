<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link to="/click-test">클릭 테스트</router-link> |
        <router-link to="/component-test">component테스트</router-link> |
        <router-link to="/emit-test-board-game">emit 테스트(보드게임)</router-link> |
        <router-link to="/axios-test-page">Vue에서Spring으로데이터전송</router-link> |
        <router-link to="/board-list-page">boardList</router-link> |
        <router-link to="/product-list-page">상품페이지</router-link> |
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
