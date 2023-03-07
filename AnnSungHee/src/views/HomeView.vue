<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link :to="{ name: 'ClickEventTest' }">클릭 테스트</router-link> |
        <router-link :to="{ name: 'ComponentTest' }">컴포넌트 테스트</router-link> |   
        <router-link :to="{ name: 'EmitTestBoardGame' }">emit 테스트(보드 게임)</router-link> |
        <router-link :to="{ name: 'AxiosTestPage' }">Vue에서 Spring으로 데이터 전송하기</router-link> |
        <router-link :to="{ name: 'JpaBoardListPage' }">게시판</router-link> |
        <router-link :to="{ name: 'JpaProductListPage' }">상품</router-link> |   
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