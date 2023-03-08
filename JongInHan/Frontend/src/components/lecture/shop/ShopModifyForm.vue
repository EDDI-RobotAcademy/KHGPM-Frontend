<!-- <template>
  <div>
      <form @submit.prevent="onSubmit">
        <table>
          <tr>
              <td>상품 번호</td>
              <td>
                  <input type="text" :value="product.productId" disabled/>
              </td>
          </tr>
          <tr>
              <td>제목</td>
              <td>
                  <input type="text" v-model="title"/>
              </td>
          </tr>
          <tr>
              <td>작성자</td>
              <td>
                  <input type="text" :value="board.writer" disabled/>
              </td>
          </tr>
          <tr>
              <td>등록일자</td>
              <td>
                  <input type="text" :value="board.regDate" disabled/>
              </td>
          </tr>
          <tr>
              <td>본문</td>
              <td>
                  <textarea cols="50" rows="20" v-model="content"/>
              </td>
          </tr>
        </table>
  
        <div>
          <button type="submit">수정 완료</button>
          <router-link :to="{ name: 'JpaBoardReadPage',
                              params: { boardId: board.boardId.toString() }}">
            취소
          </router-link>
        </div>
      </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style> -->