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