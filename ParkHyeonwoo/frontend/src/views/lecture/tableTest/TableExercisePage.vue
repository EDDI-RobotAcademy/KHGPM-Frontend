<template>
  <v-container>
   <!-- 
      headers : 각각 헤더 열을 설명하는 개체의 배열
      items : 표시할 항목의 배열
      show-select : 체크박스 역할
      boardId(item-key) : spring에서 넘어온 boards정보의 boardId
      selectedItems(v-model) : 체크한 항목들과 selectedItems 배열 바인딩
    -->
    <v-data-table 
        :headers="headerTitle" 
        :items="boards"
        :items-per-page="10"
        @click:row="readRow"
        show-select
        class="elevation-1"
        item-key="boardId"
        v-model="selectedItems"/>
  </v-container>
</template>

<script>

import router from "@/router"
import { mapActions, mapState } from 'vuex'

export default {
    name: "TableExercisePage",
    data () {
        return {
            headerTitle: [ // value 값은 spring 쪽 entity 변수명과 같아야 한다.
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
    mounted () {
        this.requestBoardListToSpring()
    },
    beforeUpdate() {
      console.log(this.selectedItems)
    },
    methods: {
        ...mapActions([
            'requestBoardListToSpring'
        ]),
        readRow (readValue) {
            alert("게시물 읽기: " + JSON.stringify(readValue)) // JSON.stringify( )는 자바스크립트의 값을 JSON 문자열로 변환

            router.push({ // JpaBoardReadPage 로 이동, boardId 정보 같이 넘김
                name: 'JpaBoardReadPage',
                params: { boardId: readValue.boardId.toString() }
            })
        }
    }
}

</script>

<style scoped>

</style>