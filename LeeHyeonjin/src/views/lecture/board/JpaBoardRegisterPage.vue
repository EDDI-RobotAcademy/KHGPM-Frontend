<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit" />
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
            //actions에 있는 것을 사용 가능
        ]),
        async onSubmit (payload) {
            await this.requestCreateBoardToSpring(payload)
            await this.$router.push({
                name: 'JpaBoardListPage'
            }) 
        }// async await - await의 끝을 보장
        // $router : redirection 바로 해당 경로로 가라
    }

// 웹페이지 상 전달할 데이터 : 보통 payload
}
</script>

<style>

</style>