<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template> 

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    name: "JpaBoardRegisterPage",
    components: { JpaBoardRegisterForm },
    methods: {
        ...mapActions([
            'requestCreateBoardToSpring'        // Board 만드는 것을 Spring 에게 요청한다~
        ]),
        async onSubmit(payload) {
            await this.requestCreateBoardToSpring(payload)
            await this.$router.push({           // 강제로 BoardList 로 돌아가라!
                name: 'JpaBoardListPage'
            })
        }
    }
}

</script>

<style>

</style>