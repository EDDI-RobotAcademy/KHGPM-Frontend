<template>
  <div>
    <form @submit.prevent="onSubmit">
        <table class="board-modify-table">
            <tr>
                <td>게시물 번호</td>
                <td><input type="text" :value="board.boardId" readonly/></td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" v-model="title"/></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input type="text" :value="board.writer" readonly/></td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td><input type="text" :value="board.regDate" readonly/></td>
            </tr>
            <tr>
                <td>본문</td>
                <td><textarea cols="50" rows="20" v-model="content"/></td>
            </tr>
        </table>

        <div class="mt-2">
            <button type="submit" class="btn btn-outline-primary me-2">수정</button>
            <router-link :to="{ name: 'JpaBoardReadPage', params: { boardId: board.boardId.toString() }}">
                <button class="btn btn-outline-danger">취소</button>
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>

export default {
    name: 'JpaBoardModifyForm',
    props: {
        board: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: '',
            content: '',
            writer: '',
            regData: ''
        }
    },
    methods: {
        onSubmit() {
            const { title, writer, content } = this
            this.$emit('submit', { title, writer, content })
        }
    },
    created() {
        this.title = this.board.title
        this.writer = this.board.writer
        this.content = this.board.content
        this.regData = this.board.regData
    }
}

</script>

<style>
    .board-modify-table td {
        border: 1px solid;
        text-align: center;
    }
</style>