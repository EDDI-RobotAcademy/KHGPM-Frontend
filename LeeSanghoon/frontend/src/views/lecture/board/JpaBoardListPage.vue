<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <router-link :to="{ name: 'JpaBoardRegisterPage' }">
      게시물 작성
    </router-link>
    <jpa-board-list :boards="boards"/>
  </v-container>
</template>

<script>

import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import { mapActions, mapState } from 'vuex'

const boardModule = 'boardModule'

export default {
  components: { JpaBoardList },
  name: "JpaBoardListPage",
  computed: {
    ...mapState(boardModule, ['boards']),
  },
  mounted () {
    this.requestBoardListToSpring()
  },
  methods: {
    ...mapActions(boardModule, [
      'requestBoardListToSpring'
    ])
  }
}

</script>

<style>

</style>