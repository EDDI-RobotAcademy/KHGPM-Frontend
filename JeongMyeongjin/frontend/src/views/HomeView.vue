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
        <router-link to="/board-list-page">게시판</router-link> |
        <router-link to="/product-list-page">상품 게시판</router-link> |
        <router-link to="/file-upload">파일 업로드</router-link> | <br/>
        <router-link to="/image-gallery">이미지 갤러리</router-link> |
        <router-link to="/life-cycle">라이프 사이클</router-link> |
        <router-link to="/carousel-page">크로셀 테스트</router-link> |
        <router-link to="/dialog-test-page">다이얼로그 테스트</router-link> |
        <router-link to="/table-test-page">테이블 테스트</router-link> |
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