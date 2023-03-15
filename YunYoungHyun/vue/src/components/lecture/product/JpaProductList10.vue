<template>
  <div>
    <h3 class="text-center mb-5">상품 목록</h3>
    <div align="center">
      <table class="text-center">
        <tr class="border border-2 border-secondary">
          <th class="border border-2 border-secondary col-1">No</th>
          <th class="border border-2 border-secondary col-6">상품명</th>
          <th class="border border-2 border-secondary col-1">가격</th>
          <th class="border border-2 border-secondary col-2">작성자</th>
          <th class="border border-2 border-secondary col-1">조회수</th>
        </tr>
        <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
          <td colspan="4">
              현재 등록된 상품이 없습니다!
          </td>
        </tr>
        <tr v-else v-for="product in products" :key="product.productNo">
          <td align="center"  class="border border-2 border-secondary">
            {{ product.productNo }}
          </td>
          <td align="center"  class="border border-2 border-secondary">
            <router-link :to="{ name: 'JpaProductReadPage', params: { productNo: product.productNo.toString() }}">
                {{ product.name }}
            </router-link>
          </td>
          <td align="center"  class="border border-2 border-secondary">
            {{ product.price }}
          </td>
          <td align="center"  class="border border-2 border-secondary">
            {{ product.writer }}
          </td>
          <td align="center"  class="border border-2 border-secondary">
            {{ product.views }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
  
<script>

export default {
    name: "JpaProductList10",
    props: {
        products: {
            type: Array
        }
    }
}

</script>

<style>

</style>