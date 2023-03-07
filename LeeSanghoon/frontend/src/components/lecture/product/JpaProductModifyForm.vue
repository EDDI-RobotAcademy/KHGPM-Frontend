<template>
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
            <td>상품명</td>
            <td>
                <input type="text" v-model="productName"/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" :value="product.writer" disabled/>
            </td>
        </tr>
        <tr>
            <td>등록일자</td>
            <td>
                <input type="text" :value="product.regDate" disabled/>
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
                <input type="number" v-model="price"/>
            </td>
        </tr>
      </table>

      <div>
        <button type="submit">수정 완료</button>
        <router-link :to="{ name: 'JpaProductReadPage',
                            params: { productId: product.productId.toString() }}">
          취소
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>

export default {
    name: "JpaProductModifyForm",
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data () {
        return {
            productName: '',
            content: '',
            writer: '',
            regDate: '',
            price: 0,
        }
    },
    created () {
        this.productName = this.product.productName
        this.writer = this.product.writer
        this.content = this.product.content
        this.regDate = this.product.regDate
        this.price = this.product.price
    },
    methods: {
        onSubmit () {
            const { productName, content, writer, price } = this
            this.$emit('submit', { productName, content, writer, price })
        }
    }
}

</script>

<style>

</style>