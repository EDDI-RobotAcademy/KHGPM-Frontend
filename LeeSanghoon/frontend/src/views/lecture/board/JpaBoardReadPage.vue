<template>
  <v-container>
    <div align="center">
      <h2>Vue + Spring 게시판 읽기</h2>
      <jpa-board-read v-if="board" :board="board"/>
      <p v-else>로딩중 .......... </p>
      <router-link :to="{ name: 'JpaBoardModifyPage', params: { boardId } }">
        게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to="{ name: 'JpaBoardListPage' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>

<script>

import JpaBoardRead from '@/components/lecture/board/JpaBoardRead.vue'
import { mapActions, mapState } from 'vuex'

const boardModule = 'boardModule'

export default {
  components: { JpaBoardRead },
    name: "JpaBoardReadPage",
    props: {
        boardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(boardModule, ['board'])
    },
    methods: {
        ...mapActions(boardModule, [
            'requestBoardToSpring',
            'requestDeleteBoardToSpring'
        ]),
        async onDelete () {
            await this.requestDeleteBoardToSpring(this.boardId)
            await this.$router.push({ name: 'JpaBoardListPage' })
        }
    },
    created () {
        console.log('boardId: ' + this.boardId)
        this.requestBoardToSpring(this.boardId)
    }
}

</script>

<style>

</style>