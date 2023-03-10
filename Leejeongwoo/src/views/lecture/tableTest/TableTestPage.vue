<template>
  <v-container>
    <v-data-table :headers="headerTitle" :items="contents" :items-per-page="10" class="elevation-1" />
  </v-container>
</template>

<script>
export default {
  name: "TableTestPage",
  data() {
    return {
      headerTitle: [
        { text: '번호', value: 'boardId', width: '70px' },
        { text: '제목', value: 'title', width: '200px' },
        { text: '작성자', value: 'writer', width: '100px' },
      ],
      contents: [
        { boardId: 1, title: '마포대교에서 정모할 사람 ?', writer: '으아아아앜' },
        { boardId: 2, title: '야호야호', writer: '야호야호' },
        { boardId: 3, title: '야호야호야호', writer: '으아아아앜' },
        { boardId: 4, title: '주식포크망', writer: '으아아아앜' },
        { boardId: 5, title: '존버승리', writer: '존버승리' },
        { boardId: 6, title: '마포대교정모', writer: '으아아아앜' },
        { boardId: 7, title: '한강정모', writer: '한강정모' },
        { boardId: 8, title: '야호야호', writer: '한강정모' },
        { boardId: 9, title: '야호', writer: '으아아아앜' },
        { boardId: 10, title: '단타만쳐라', writer: '한강정모' },
        { boardId: 11, title: '비트코인', writer: '으아아아앜' },
        { boardId: 12, title: '현대중공업 실화냐', writer: '으아아아앜' },
        { boardId: 13, title: '테슬라 존버 승리', writer: '한강정모' },
        { boardId: 14, title: '코인사기', writer: '마포대교정모' },
        { boardId: 15, title: '야호', writer: '으아아아앜' },
        { boardId: 16, title: '미구크주식', writer: '마포대교정모' },
        { boardId: 17, title: '마포대교에서 정모할 사람 ?', writer: '으아아아앜' },
        { boardId: 18, title: '야호야호', writer: '야호야호' },
        { boardId: 19, title: '야호야호야호', writer: '으아아아앜' },
        { boardId: 20, title: '주식포크망', writer: '으아아아앜' },
        { boardId: 21, title: '존버승리', writer: '존버승리' },
        { boardId: 22, title: '마포대교정모', writer: '으아아아앜' },
        { boardId: 23, title: '한강정모', writer: '한강정모' },
        { boardId: 24, title: '야호야호', writer: '한강정모' },
        { boardId: 25, title: '야호', writer: '으아아아앜' },
        { boardId: 26, title: '단타만쳐라', writer: '한강정모' },
        { boardId: 27, title: '비트코인', writer: '으아아아앜' },
        { boardId: 28, title: '현대중공업 실화냐', writer: '으아아아앜' },
        { boardId: 29, title: '테슬라 존버 승리', writer: '한강정모' },
        { boardId: 30, title: '코인사기', writer: '마포대교정모' },
        { boardId: 31, title: '야호', writer: '으아아아앜' },
        { boardId: 32, title: '미구크주식', writer: '마포대교정모' },
      ]
    }
  }
}
</script >
</script>

<style></style>