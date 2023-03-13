<template>
  <v-container>
  <div>
    <div class="div">
    <table>
      <tr>
        <td>게시물 번호</td>
        <td>
          <input type="text" :value="board.boardId" readonly/>
        </td>
      </tr>
      <tr>
        <td>제목</td>
        <td>
          <input type="text" :value="board.title" readonly/>
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" :value="board.writer" readonly/>
        </td>
      </tr>
      <tr>
        <td>등록일자</td>
        <td>
          <input type="text" :value="board.regDate" readonly/>
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <textarea cols="50" rows="20" :value="board.content" readonly/>
        </td>
      </tr>
    </table>
  </div>
  </div>
</v-container>
</template>

<script>
export default {
    name: "JpaBoardRead",
    props: {
        board: {
            type: Object,
            required: true,
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