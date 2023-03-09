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
                        <input type="text" v-model="title"/>
                    </td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td>
                        <input type="text" :value="product.price" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>등록일자</td>
                    <td>
                        <input type="text" :value="product.regDate" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>상세정보</td>
                    <td>
                        <textarea cols="30" rows="10" v-model="detail"/>
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
            title: '',
            price: '',
            detail: '',
            regDate: '',
        }
    },
    created () {
        this.title = this.product.title
        this.price = this.product.price
        this.detail = this.product.detail
        this.regDate = this.product.regDate
    },
    methods: {
        onSubmit () {
            const { title, price, detail } = this
            this.$emit('submit', { title, price, detail })
        }
    }
}
</script>

<style>

</style>