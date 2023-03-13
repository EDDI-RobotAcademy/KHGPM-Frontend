<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> <br>
        <router-link to="/bind-test">BindTest</router-link> <br>
        <router-link to="/click-test">ClickEvent</router-link> <br>
        <router-link to="/component-test">컴포넌트 테스트</router-link> <br>
        <router-link to="/emit-test-board-game">emit 테스트 (보드 게임)</router-link> <br>
        <router-link to="/axios-test-page">Vue에서 Spring으로 데이터 전송하기</router-link> <br>
        <router-link to="/board-list-page">게시판</router-link> <br>
        <router-link to="/product-list-page">상품 목록</router-link> <br>
        <router-link to="/file-upload-page">파일 업로드</router-link> <br>
        <router-link to='/image-gallery'>이미지 갤러리</router-link> <br>
        <router-link to="/life-cycle">라이프 사이클</router-link> <br>
        <router-link to="/carousel-gallery">크로셀 테스트</router-link> <br>
        <router-link to="/dialog-test-page">다이얼로그 테스트</router-link> <br>
        <router-link to="/table-test-page">테이블 테스트</router-link> <br>
        <router-link to="/table-exercise-page">테이블 테스트</router-link> <br>
        
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