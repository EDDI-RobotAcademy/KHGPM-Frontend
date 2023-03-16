<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link to="/click-test">클릭 테스트</router-link> |
        <router-link to="/component-test">컴포넌트 테스트</router-link> |
        <router-link to="/emit-test-board-game">emit 테스트(보드 게임)</router-link> |
        <router-link to="/axios-test-page">Vue에서 Spring으로 데이터 전송하기</router-link> |
        <router-link to="/board-list-page">게시판</router-link> |
        <router-link to="/product-list-page">상품 게시판</router-link> |
        <router-link to="/file-upload">파일 업로드</router-link> | <br/>
        <router-link to="/image-gallery">이미지 갤러리</router-link> |
        <router-link to="/carousel-page">크로셀 테스트</router-link> |
        <router-link to="/dialog-test-page">Dialog 테스트</router-link> |
        <router-link to="/table-test-page">Table 테스트</router-link> |
        <router-link to="/table-exercise-page">vue + spring 테이블 테스트</router-link> |
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