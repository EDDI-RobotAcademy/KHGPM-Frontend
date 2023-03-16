<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>

import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions, mapState } from 'vuex'
        // 맵액션즈는 엑시오스 스토어에 있는 액션이랑 매핑됨

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    computed: {
        ...mapState(['board'])
    },
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestCreateBoardToSpring(payload)
            // this.~~가 끝날때까지 기다리라는 뜻의 await
            await this.$router.push({
              // $는 view가 라우터 정보를 제어하기 위함. 강제로 다른 페이지로 이동
              name: 'JpaBoardReadPage',
              params: { boardId: this.board.boardId.toString() }
            })
        }
    }
}
</script>

<style>
</style>