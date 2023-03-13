<template>
  <v-container>
   <!-- elevation : 테이블 테두리 상대적 깊이 -->
   <v-data-table :headers="headerTitle" :items="contents" :items-per-page="10" class="elevation-1" />
  </v-container>
</template>

<script>

export default {
   name: "TableTestPage",
   data() {
      return {
         headerTitle : [
            { text: '번호', value: 'boardId', width: "70px" },
            { text: '제목', value: 'title', width: "200px" },
            { text: '작성자', value: 'writer', width: "100px" },
         ],
         contents: [
            { boardId: 1, title: '야호1', writer: '작성자' },
            { boardId: 2, title: '야호2', writer: '작성자' },
            { boardId: 3, title: '야호3', writer: '작성자' },
            { boardId: 4, title: '야호4', writer: '작성자' },
            { boardId: 5, title: '야호5', writer: '작성자' },
            { boardId: 6, title: '야호6', writer: '작성자' },
            { boardId: 7, title: '야호7', writer: '작성자' },
            { boardId: 8, title: '야호8', writer: '작성자' },
            { boardId: 9, title: '야호9', writer: '작성자' },
            { boardId: 10, title: '야호10', writer: '작성자' },
            { boardId: 11, title: '야호11', writer: '작성자' },
            { boardId: 12, title: '야호12', writer: '작성자' },
         ]
      }
   }

}
</script>
<!-- scoped 사용 시 해당 vue 페이지에만 css 스타일 적용 -->
<style scoped> 

</style>