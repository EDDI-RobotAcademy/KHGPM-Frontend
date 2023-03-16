<template>
  <div class="container" align="center">
    <div alian="center">
      <h2 class="mb-5">Vue + Spring 게시판 읽기</h2>
      <jpa-board-read v-if="board" :board="board"/>
      <p v-else>로딩중...............</p>
      <div class="mt-2">
        <router-link :to="{ name: 'JpaBoardModifyPage', params: { boardId } }">
          <button class="btn btn-outline-primary me-2">게시물 수정</button>
        </router-link>
        <button @click="onDelete" class="btn btn-outline-danger me-2">삭제</button>
        <router-link :to="{ name: 'JpaBoardListPage' }">
          <button class="btn btn-outline-danger">돌아가기</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import JpaBoardRead from '@/components/lecture/board/JpaBoardRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
    name: 'JpaBoardReadPage',
    components : { JpaBoardRead },
    props: {
        boardId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['board'])
    },
    methods: {
        ...mapActions([
            'requestBoardToSpring',
            'requestDeleteBoardToSpring'
        ]),
        async onDelete() {
            await this.requestDeleteBoardToSpring(this.boardId);
            await this.$router.push({ name: 'JpaBoardListPage' })
        }
    },
    created() {
        this.requestBoardToSpring(this.boardId)
    }
}

</script>

<style>

</style>