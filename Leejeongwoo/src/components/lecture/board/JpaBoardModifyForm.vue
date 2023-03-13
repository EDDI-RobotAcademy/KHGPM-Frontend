<template>
    <v-container>
        <div>
            <form @submit.prevent="onSubmit">
                <div class="div">
                    <table>
                        <tr>
                            <td>게시물 번호</td>
                            <td>
                                <input type="text" :value="board.boardId" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" v-model="title" />
                            </td>
                        </tr>
                        <tr>
                            <td>작성자</td>
                            <td>
                                <input type="text" :value="board.writer" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>등록일자</td>
                            <td>
                                <input type="text" :value="board.regDate" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>본문</td>
                            <td>
                                <textarea cols="50" rows="20" v-model="content" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <v-btn type="submit" color="blue">수정 완료</v-btn>
                    <router-link :to="{
                        name: 'JpaBoardReadPage',
                        params: { boardId: board.boardId.toString() }
                    }">
                        <v-btn color="red">취소</v-btn>
                    </router-link>
                </div>
            </form>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "JpaBoardModifyForm",
    props: {
        board: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            title: '',
            content: '',
            writer: '',
            regDate: '',
        }
    },
    created() {
        this.title = this.board.title
        this.writer = this.board.writer
        this.content = this.board.content
        this.regDate = this.board.regDate
    },
    methods: {
        onSubmit() {
            const { title, content, writer } = this
            this.$emit('submit', { title, content, writer })
        }
    }
}

</script>


<style scoped>
a {
    text-decoration: none;
}

.div {
    display: flex;
    justify-content: center;
}
table {
    border-collapse: collapse;
    border: 2px solid black;
    margin-bottom: 5px;
  }
  
  td {
    padding: 5px;
    border: 2px solid black;
  }

</style>