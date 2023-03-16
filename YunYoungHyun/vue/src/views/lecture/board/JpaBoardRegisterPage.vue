<template>
  <div class="container" align="center">
    <h2 class="mb-5">게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </div>
</template> 

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: "JpaBoardRegisterPage",
    components: { JpaBoardRegisterForm },
    computed: {
      ...mapState(['board'])
    },
    methods: {
        ...mapActions([
            'requestCreateBoardToSpring'        // Board 만드는 것을 Spring 에게 요청한다~
        ]),
        async onSubmit(payload) {
            const board = await this.requestCreateBoardToSpring(payload)
            // console.log("board: "+ board)
            await this.$router.push({ name: 'JpaBoardReadPage', params: { boardId: board.data.boardId.toString() } })
            // await this.requestCreateBoardToSpring(payload)
            // await this.$router.push({ name: 'JpaBoardReadPage', params: { boardId: this.board.boardId.toString() } })
        }
    }
}

</script>

<style>

</style>