<template>
    <v-container>
        <div>
            <form @submit.prevent="onSubmit">
                <div class="div">
                    <table>
                        <tr>
                            <td>게시물 번호</td>
                            <td>
                                <input type="text" :value="product.productId" disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>상품이름</td>
                            <td>
                                <input type="text" :value="product.productName" readonly />
                            </td>
                        </tr>
                        <tr>
                            <td>카테고리</td>
                            <td>
                                <input type="text" :value="product.productKategorie" />
                            </td>
                        </tr>
                        <tr>
                            <td>상품 설명</td>
                            <td>
                                <textarea cols="50" rows="20" :value="product.productContent" />
                            </td>
                        </tr>
                        <tr>
                            <td>브랜드</td>
                            <td>
                                <input type="text" :value="product.productBrand" />
                            </td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td>
                                <!-- 가격 타입은 number로 맞춰주자  -->
                                <input type="number" :value="product.productPrice" />
                            </td>
                        </tr>
                    </table>
                </div>
                <div>
                    <button type="submit">수정 완료</button>
                    <router-link :to="{
                        name: 'ProductReadPage',
                        params: { productId: product.productId.toString() }
                    }">
                        취소
                    </router-link>
                </div>
            </form>
        </div>
    </v-container>
</template>

<script>

export default {
    name: "ProductModifyForm",
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            productName: '',
            productKategorie: '',
            productContent: '',
            productBrand: '',
            productPrice: '',
        }
    },
    created() {
        this.productName = this.product.productName
        this.productKategorie = this.product.productKategorie
        this.productContent = this.product.productContent
        this.productBrand = this.product.productBrand
        this.regDate = this.product.regDate
        this.productPrice = this.product.productPrice
    },
    methods: {
        onSubmit() {
            const { productName, productKategorie, productContent, productBrand, productPrice } = this
            this.$emit('submit', { productName, productKategorie, productContent, productBrand, productPrice })
        }
    }
}
</script>


<!-- <style>
.div{
  display: flex;
  justify-content: center;
}

</style> -->