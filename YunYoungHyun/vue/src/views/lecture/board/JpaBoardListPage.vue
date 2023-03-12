<template>
  <div class="container" align="center">
    <h2>게시물 목록</h2>
    <div class="d-flex justify-content-end my-5">
      <router-link :to="{ name: 'JpaBoardRegisterPage' }">
        <button class="btn btn-outline-primary">게시물 작성</button>
      </router-link>
    </div>
    <jpa-board-list :boards="boards"/>
  </div>
</template>

<script>
import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { JpaBoardList },
  name: "JpaBoardListPage",
  computed: {
      ...mapState(['boards'])
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