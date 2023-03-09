<template>
  <div>
    <h3>상품 리스트</h3>
    <table>
        <tr>
            <th align="center" width="100">번호</th>
            <th align="center" width="640">상품명</th>
            <th align="center" width="200">상품가격</th>
            <th align="center" width="200">판매자</th>
            <th align="center" width="100">배송</th>
            <th align="center" width="240">등록일</th>
        </tr>
        <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
            <td colspan="4">
                현재 등록된 게시물이 없습니다.
            </td>
        </tr>
        <tr v-else v-for="product in products" :key="product.productId">
            <td align="center">{{ product.productId }}</td>
            <td align="left">{{ product.title }}</td>
            <td align="left">{{ product.price }}</td>
            <td align="left">{{ product.writer }}</td>
            <td align="left">{{ product.delivery }}</td>
            <td align="left">{{ product.regDate }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: "ProductBoardListForm",
    props: {
        products :{
            type: Array
        }
    }
}
</script>

<style>

</style>