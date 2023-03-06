<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <p><mark>게시글 목록이 보여지는 페이지 입니다.</mark></p>
    <router-link :to="{ name: 'JpaBoardRegisterPage' }">
      게시글 작성 하러 가기
    </router-link>
    <jpa-board-list :boards="boards"/>
  </v-container>
</template>

<script>

import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { JpaBoardList },
  name: "JpaBoardListPage",
  computed: {
    ...mapState([
      'boards'
    ]),
  },
  mounted () {
    this.requestBoardListToSpring()
  },
  methods: {
    ...mapActions([
      'requestBoardListToSpring'
    ])
  }
}
</script>

<style>

</style>