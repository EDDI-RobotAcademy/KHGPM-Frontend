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
        <router-link :to="{ name: 'FileUploadPage' }">파일 업로드</router-link> | <br/>
        <router-link :to="{ name: 'ImageGalleryPage' }">이미지 갤러리</router-link> |
        <router-link :to="{ name: 'LifeCyclePage' }">라이프 사이클</router-link> |
        <router-link :to="{ name: 'CarouslePage' }">크로셀 테스트</router-link> |
        <router-link :to="{ name: 'DialogTestPage' }">다이얼로그 테스트</router-link> |
        <router-link :to="{ name: 'TableTestPage' }">테이블 테스트</router-link> |
        <router-link :to="{ name: 'TableExercisePage' }">테이블 테스트</router-link> |
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