<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit" />
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    computed: {
      ...mapState([ 
         'board'
      ]),
   },
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring',
        ]),
        async onSubmit (payload) {
            await this.requestCreateBoardToSpring(payload) // 얘를 끝날때까지 무조건 대기해라
            await this.$router.push({ // 강제로 JpaBoardReadPage 로 이동
                name: 'JpaBoardReadPage',
                params: { boardId: this.board.boardId.toString() }
            })
        }
    },
}

</script>

<style>

</style>