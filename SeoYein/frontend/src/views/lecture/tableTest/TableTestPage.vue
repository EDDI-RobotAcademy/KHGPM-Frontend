<template>
  <v-container>
    <v-data-table
        :headers="headerTitle"
        :items="contents"
        :items-per-page="10"
        class="elevation-1"/>
  </v-container>
</template>

<script>

export default {
    name: "TableTestPage",
    data () {
        return {
            headerTitle: [
                { text: '번호', value: 'boardId', width: "70px" },
                { text: '제목', value: 'title', width: "200px" },
                { text: '작성자', value: 'writer', width: "100px" },
            ],
            contents: [
                { boardId: 1, title: '주식은 하는게 아니다', writer: '개미' },
                { boardId: 2, title: '난...레거시가 싫다', writer: '타도ABH' },
                { boardId: 3, title: '새로운 스킬 "뷰티파이"을(를) 습득했습니다!', writer: 'SYSTEM' },
                { boardId: 4, title: '<<썬데이메이플>> 용사님을 위한 특별 보상 받아가세요!', writer: 'GM레몬' },
                { boardId: 5, title: '[공지] 깊은 사과의 말씀 드립니다.', writer: '141' },
            ]
        }
    }
}
</script>

<style scoped>

</style>