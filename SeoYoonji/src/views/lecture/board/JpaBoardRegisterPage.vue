<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue';
import { mapActions, mapState } from 'vuex';

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    computed: {
        ...mapState([
            'board'
        ])
    },
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
        ]), 
        async onSubmit (payload) {     //await 로 쓰레드가 끝내길 기다리게 함
            await this.requestCreateBoardToSpring(payload)
            await this.$router.push({  //router 제어하여 리다이렉션
                name: 'JpaBoardReadPage',
                params: { boardId: this.board.boardId.toString() }
            })
        }
    }
}
</script>

<style>

</style>