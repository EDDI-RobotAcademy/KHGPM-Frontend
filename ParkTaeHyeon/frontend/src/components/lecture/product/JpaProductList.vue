<template>
    <div>
        <br>
            <h3>상품 목록</h3>
        <br>
    <table>
        <tr>
            <th align="center" width="80">제품번호</th>
            <th align="center" width="800">제품이미지 및 제품명</th>
            <th align="center" width="80">판매가격</th>
        </tr>
        <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
            <td colspan="4">
                등록된 상품이 없습니다.
            </td>
        <tr v-else v-for="product in products" :key="product.productId">
            <td align="center">
                {{ product.productId}}
            </td>
            <td align="left">
                <router-link :to="{ name: 'JpaProductReadPage',
                                    params: { productId: product.productId.toString() }}">
                    {{ product.name }}
                </router-link>
            <td align="right">
                    {{ product.price }}
            </td>
        </tr>
    </table>
    </div>
</template>

<script>

export default {
    name: "JpaProductList",
    props: {
        products: {
            type: Array
        }
    }
}
</script>

<style>
</style>