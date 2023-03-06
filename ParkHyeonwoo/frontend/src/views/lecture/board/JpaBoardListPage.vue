<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <router-link :to="{ name: 'JpaBoardRegisterPage' }"> <!-- link는 router의 이동하고자 하는 대상 name과 매핑 -->
      게시물 작성
    </router-link>
  </v-container>
</template>

<script>

export default {
   components: { JpaBoardList },
   name: "JpaBoardListPage",
   computed: {
      ...mapState([
         'boards'
      ])
   }
}

</script>

<style>

</style>