<template>
  <v-container>
    <div id="home">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/bind-test">BindTest</router-link> |
        <router-link to="/click-test">클릭 테스트</router-link> |
        <router-link to="/component-test">component테스트</router-link> |
        <router-link to="/emit-test-board-game">emit테스트(보드게임)</router-link> |
        <router-link to="/axios-test-page">Vue에서Spring으로데이터전송</router-link> |
        <router-link to="/board-list-page">게시판</router-link> |
        <router-link to="/product-list-page">상품게시판</router-link> | <br>
        <router-link to="/file-upload">파일업로드</router-link> |
        <router-link to="/image-gallery">이미지업로드</router-link> |
        <router-link to="/carousel-page">크로셀테스트</router-link> |
        <router-link to="/dialog-test-page">다이얼로그테스트</router-link> |
        <router-link to="/table-test-page">테이블테스트</router-link> |
        <router-link to="/table-exercise-page">vue+spring 게시판읽기</router-link> |
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
