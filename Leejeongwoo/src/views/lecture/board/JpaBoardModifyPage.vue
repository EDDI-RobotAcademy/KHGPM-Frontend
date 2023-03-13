<template>
    <v-container>
        <div align="center">
            <h2>게시글 수정</h2>
            <p><mark>작성한 게시글을 수정하는 페이지 입니다.</mark></p>
            <jpa-board-modify-form :board="board" @submit="onSubmit" />
            <!-- <jpa-board-modify-form v-if="board" :board="board" @submit="onSubmit" />
            <p v-else>로딩중 ........</p> -->
        </div>
    </v-container>
</template>

<script>

import JpaBoardModifyForm from '@/components/lecture/board/JpaBoardModifyForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaBoardModifyForm },
    name: "JpaBoardModifyPage",
    props: {
        boardId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['board'])
    },
    methods: {
        ...mapActions([
            'requestBoardToSpring',
            'requestBoardModifyToSpring',
        ]),
        async onSubmit(payload) {
            const { title, content, writer } = payload
            const boardId = this.boardId

            await this.requestBoardModifyToSpring({ boardId, title, content, writer })
            await this.$router.push({
                name: 'JpaBoardReadPage',
                params: { boardId: this.boardId }
            })
        }
    },
    created() {
        this.requestBoardToSpring(this.boardId)
    }
}

</script>

<style></style>