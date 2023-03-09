<template>
  <div>
    <h3>상품 목록</h3>
    <table>
      <tr>
        <th align="center" width="100">No</th>
        <th align="center" width="640">상품명</th>
        <th align="center" width="150">작성자</th>
        <th align="center" width="300">등록일자</th>
      </tr>
      <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
        <td colspan="4">
            현재 등록된 상품이 없습니다!
        </td>
      </tr>
      <tr v-else v-for="product in products" :key="product.productId">
        <td align="center">
          {{ product.productId }}
        </td>
        <td align="left">
            <router-link :to="{ name: 'ProductReadPage',
                            params: { productId: product.productId.toString() }}">
            {{ product.productName }}
          </router-link>
        </td>
        <td align="right">
          {{ product.writer }}
        </td>
        <td align="center">
          {{ product.regDate }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
    name: "ProductList",
    props: {
        products: {
            type: Array
        }
    }
}
</script>

<style>
</style>