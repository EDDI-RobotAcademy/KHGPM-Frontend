<template>
  <form @submit.prevent="onSubmit">
    <table class="product-register-table">
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
            <td><input type="text" v-model="writer"/></td>
        </tr>
        <tr>
            <td>상품내용</td>
            <td><textarea cols="50" rows="20" v-model="content"/></td>
        </tr>
    </table>

    <div class="mt-3">
        <button type="submit" class="btn btn-outline-primary me-2">등록</button>
        <router-link :to="{ name: 'JpaProductListPage' }">
            <button type="button" class="btn btn-outline-danger">취소</button>
        </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: 'JpaProductRegisterForm',
    data() {
        return {
            name: '상품명',
            price: 0,
            writer: '작성자',
            content: '상품내용'
        }
    },
    methods: {
        onSubmit() {
            const { name, price, writer, content } = this
            this.$emit('submit', { name, price, writer, content })
        }
    }
}

</script>

<style>
.product-register-table td {
    border : 2px solid;
}
</style>