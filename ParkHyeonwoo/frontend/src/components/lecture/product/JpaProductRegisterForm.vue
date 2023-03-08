<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <td>
          <input type="text" v-model="productName"/>
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" v-model="writer"/>
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <textarea cols="50" rows="20" v-model="content"/>
        </td>
      </tr>
      <tr>
        <td>가격</td>
        <td>
          <input tpye="text" v-model="price"/>
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <router-link to="{ name: 'JpaProductListPage' }">
        취소
      </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: "JpaProductRegisterForm",
    data () {
        return {
            productName: '상품명을 입력하세요.',
            writer: '작성자',
            content: '내용을 입력하세요.',
            price: '가격을 입력하세요'
        }
    },
    methods: {
        onSubmit () {
            const { productName, writer, content, price } = this
            this.$emit('submit', { productName, writer, content, price })
        }
    }
}

</script>

<style>

</style>