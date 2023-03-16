<template>
  <v-container>
    <v-data-table :headers="headerTitle" 
                :items="contents"
                :items-per-page="10"
                class="elevation-1"> <!--그림자 효과-->
    </v-data-table>
  </v-container>
</template>

<script>
export default {
    name: "TableTestPage",
    data () {
        return {
            headerTitle: [
                { text: '번호', value: 'boardId', width: "70px"},
                { text: '제목', value: 'title', width: "200px"},
                { text: '작성자', value: 'writer', width: "100px"},
            ],
            contents: [
                { boardId: 1, title: '안녕', writer: '윤지' },
                { boardId: 2, title: '헬로', writer: '윤지2' },
                { boardId: 3, title: '하이', writer: '윤지3' },
                { boardId: 4, title: '안녕하세요', writer: '윤지4' },
                { boardId: 5, title: '안녕^^', writer: '윤지5' },
                { boardId: 6, title: '졸려', writer: '윤지6' },
                { boardId: 7, title: '집가고싶다', writer: '윤지7' },
                { boardId: 8, title: '하', writer: '윤지8' },
                { boardId: 9, title: '잘래', writer: '윤지9' },
                { boardId: 10, title: '멍멍', writer: '뚜루' },
                { boardId: 11, title: '졸려', writer: '윤지10' },
                { boardId: 12, title: '집가고싶다', writer: '윤지11' },
                { boardId: 13, title: '하', writer: '윤지12' },
                { boardId: 14, title: '잘래', writer: '윤지13' },
                { boardId: 15, title: '왈왈', writer: '뚜루' },
            ]
        }
    }
}
</script>

<style>

</style>