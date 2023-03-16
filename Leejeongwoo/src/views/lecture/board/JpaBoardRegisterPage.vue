<template>
  <v-container>
    <div align="center">
      <h2>게시글 작성</h2>
      <p><mark>게시글 목록을 작성하는 페이지 입니다.</mark></p>
      <jpa-board-register-form @submit="onSubmit" />
    </div>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue';
import { mapActions } from 'vuex'
export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
        ]),
        async onSubmit (payload) {
            const board = await this.requestCreateBoardToSpring(payload)
            console.log('board: ' + JSON.stringify(board.data))
            await this.$router.push({
                name: 'JpaBoardReadPage',
                params: { boardId: board.data.boardId.toString() }
            })
        }
    }
}

</script>

<style></style>
