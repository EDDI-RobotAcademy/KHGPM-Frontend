<template>
  <v-container>
    <form @submit.prevent="onSubmit">
      <div class="div">
        <table>
          <tr>
            <td>제목</td>
            <td>
              <input type="text" v-model="title" />
            </td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>
              <input type="text" v-model="writer" />
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
          <v-btn type="submit" color="blue">등록</v-btn>
        <!-- 취소를 이전페이지인 보드 리스트로 링크 걸어 둔거임 -->
        <router-link :to="{ name: 'JpaBoardListPage' }">
          <v-btn color="red">취소</v-btn>
        </router-link>
      </div>
    </form>
  </v-container>
</template>

<script>export default {
  name: "JpaBoardRegisterForm",
  data () {
      return {
          title: '제목을 입력하세요.',
          writer: '누구세요 ?',
          content: '내용을 입력하세요.'
      }
  },
  methods: {
      onSubmit () {
          const { title, writer, content } = this
          this.$emit('submit', { title, writer, content })
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