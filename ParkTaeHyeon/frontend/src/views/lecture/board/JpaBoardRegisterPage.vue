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
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    methods: {
        // actions에 있는 것을 맵핑 하는 것이다.
        ...mapActions ([
            'requestCreateBoardToSpring'
        ]),
        // async - await 순차적 흐름을 필수적으로 코드를 짤 때
        async onSubmit (payload) {
            console.log(payload)
            await this.requestCreateBoardToSpring(payload)
            // 강제 이동. sendReDirect와 유사한 기능
            await this.$router.push({
                name: 'JpaBoardListPage'
            })
        }
    }
}
</script>

<style>
</style>