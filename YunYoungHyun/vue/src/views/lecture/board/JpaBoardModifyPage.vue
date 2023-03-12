<template>
    <div class="container" align="center">
        <h2>게시물 수정</h2>
        <jpa-board-modify-form v-if="board" :board="board" @submit="onSubmit"/>
        <p v-else>로딩중...............</p>
    </div>
</template>

<script>
import JpaBoardModifyForm from '@/components/lecture/board/JpaBoardModifyForm.vue';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'JpaBoardModifyPage',
    components: { JpaBoardModifyForm },
    props: {
        boardId: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(['board'])
    },
    methods: {
        ...mapActions([
            'requestBoardToSpring',
            'requestBoardModifyToSpring'
        ]),
        async onSubmit(payload) {
            const { title, writer, content } = payload
            const boardId = this.boardId

            await this.requestBoardModifyToSpring({ boardId, title, writer, content })
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

<style>

</style>