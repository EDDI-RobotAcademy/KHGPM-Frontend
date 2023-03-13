<template>
  <v-container>
  <h3>게시글 목록</h3>
  <div class="div">
    <table>
      <tr>
        <th align="center" width="100">No</th>
        <th align="center" width="640">제목</th>
        <th align="center" width="150">작성자</th>
        <th align="center" width="300">등록일자</th>
      </tr>
      <!-- (Array.isArray(boards)은 boards 테이블이 배열인지 여부 확인 -->
      <!-- 한마디로 보드 테이블 없으면 현재 등록된 게시물 없다는 소리 임 -->
      <tr v-if="!boards || (Array.isArray(boards) && boards.length === 0)">
        <td colspan="4">
            현재 등록된 게시물이 없습니다!
        </td>
      </tr>
      <tr v-else v-for="board in boards" :key="board.boardId">
        <td>
          {{ board.boardId }}
        </td>
        <td>
          <!-- toString 해준 이유는?  -->
          <router-link :to="{ name: 'JpaBoardReadPage',
                            params: { boardId: board.boardId.toString() }}">
            {{ board.title }}
          </router-link>
        </td>
        <td>
          {{ board.writer }}
        </td>
        <td>
          {{ board.regDate }}
        </td>
      </tr>
    </table>
  </div>
</v-container>
</template>

<script>

export default {
    name: "JpaBoardList",
    props: {
        boards: {
            type: Array
        }
    }
}

</script>

<style scoped>
.div{
  display: flex;
  justify-content: center;
}

</style>