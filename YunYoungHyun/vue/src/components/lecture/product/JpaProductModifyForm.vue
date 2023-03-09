<template>
  <div>
    <form @submit.prevent="onSubmit">
        <table class="product-modify-table">
            <tr class="border border-2 border-secondary">
                <td>상품 번호</td>
                <td><input type="text" :value="product.productNo" readonly/></td>
            </tr>
            <tr>
                <td>상품명</td>
                <td><input type="text" v-model="name"/></td>
            </tr>
            <tr>
                <td>가격</td>
                <td><input type="text" v-model="price"/></td>
            </tr>
            <tr>
                <td>작성자</td>
                <td><input type="text" :value="product.writer" readonly/></td>
            </tr>
            <tr>
                <td>본문</td>
                <td><textarea cols="50" rows="20" v-model="content"/></td>
            </tr>
        </table>

        <div class="mt-3">
            <button type="submit" class="btn btn-outline-primary me-2">수정</button>
            <router-link :to="{ name: 'JpaProductReadPage', params: { boardId: product.productNo.toString() }}">
                <button class="btn btn-outline-danger" type="button">취소</button>
            </router-link>
        </div>
    </form>
  </div>
</template>

<script>

export default {
    name: 'JpaProductModifyForm',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            name: '',
            price: 0,
            writer: '',
            content: ''
        }
    },
    methods: {
        onSubmit() {
            const { name, price, writer, content } = this
            this.$emit('submit', { name, price, writer, content })
        }
    },
    created() {
        this.name = this.product.name
        this.price = this.product.price
        this.writer = this.product.writer
        this.content = this.product.content
    }
}

</script>

<style>
    .product-modify-table td {
        border : 2px solid;
    }
</style>