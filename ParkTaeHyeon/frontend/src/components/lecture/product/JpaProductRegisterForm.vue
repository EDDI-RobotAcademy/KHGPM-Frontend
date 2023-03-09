<template>
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>제품명</td>
                <td>
                    <input type="text" v-model="name"/>
                </td>
            </tr>
            <tr>
                <td>판매가격</td>
                <td>
                    <input type="text" v-model="price"/>
                </td>
            </tr>
            <tr>
                <td>제품소개</td>
                <td>
                    <textarea cols="50" rows="20" v-model="content"/>
                </td>
            </tr>
        </table>
        <div>
            <button type="submit">등록</button>
            <router-link to="{ name:'JpaProductListPage' }">
            돌아가기
            </router-link>
        </div>
    </form>
</template>

<script>
export default {
    name: "JpaProductRegisterForm",
    data() {
        return {
            name: '제품 명을 입력해주세요.',
            price: '판매 가격을 입력해주세요',
            content: '제품 소개를 입력해주세요.'
        }
    },
    methods: {
        onSubmit() {
            const { name, price, content } = this
            this.$emit('submit', { name, price, content })
        }
    }
}
</script>