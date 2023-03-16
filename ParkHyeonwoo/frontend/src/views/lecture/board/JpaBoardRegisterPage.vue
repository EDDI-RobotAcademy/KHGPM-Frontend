<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit" />
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring',
        ]),
        async onSubmit (payload) {
            const board = await this.requestCreateBoardToSpring(payload) // 얘를 끝날때까지 무조건 대기해라
            console.log('board: ' + JSON.stringify(board.data))
            await this.$router.push({ // 강제로 JpaBoardReadPage 로 이동
                name: 'JpaBoardReadPage',
                params: { boardId: board.data.boardId.toString() }
            })
        }
    },
}

</script>

<style>

</style>