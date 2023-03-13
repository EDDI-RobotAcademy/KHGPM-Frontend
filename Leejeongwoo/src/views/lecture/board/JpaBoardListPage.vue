<template>
    <v-container>
        <div align="center">
            <h2>Vue + Spring + JPA Boards</h2>
            <p><mark>게시글 목록이 보여지는 페이지 입니다.</mark></p>
            <router-link :to="{ name: 'JpaBoardRegisterPage' }">
                게시글 작성 하러 가기
            </router-link>
        </div>
        <v-data-table :headers="headerTitle" :items="boards" :items-per-page="10" @click:row="readRow" show-select
            class="elevation-1" item-key="boardId" v-model="selectedItems" />
        <!-- <jpa-board-list :boards="boards"/> -->
    </v-container>
</template>

<script>

import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import router from "@/router"

//vuex는 상태(state)를 관리하는 라이브러리
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaBoardList },
    name: "JpaBoardListPage",
    data() {
        return {
            headerTitle: [
                { text: '번호', value: 'boardId', width: "70px" },
                { text: '제목', value: 'title', width: "200px" },
                { text: '작성자', value: 'writer', width: "100px" },
                { text: '등록일자', value: 'regDate', width: "100px" },
            ],
            selectedItems: [],
            //boardsWithSelected: [this.boards.map(x => ({...x, isSelectable: false}))],
        }
    },
    computed: {
        ...mapState([
            'boards'
        ]),
    },
    mounted() {
        this.requestBoardListToSpring()
    },
    methods: {
        ...mapActions([
            'requestBoardListToSpring'
        ]),
        // 사용자가 테이블의 특정 데이터 행을 클릭할 때 호출됨
        readRow(readValue) {
            router.push({
                name: 'JpaBoardReadPage',
                params: { boardId: readValue.boardId.toString() }
            })
        },
    }
}
</script>

<style scoped>

</style>