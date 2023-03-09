<template>
  <v-container>
    <div class="div">
      <table>
        <tr>
          <th width="100">No.</th>
          <th width="150">Kategorie</th>
          <th width="350">상품명</th>
          <th width="150">브랜드</th>
          <th width="150">가격</th>
          <th width="200">등록일자</th>
        </tr>
        <tr v-if="!products || (Array.isArray(products) && products.length === 0)">
          <td colspan="5">
              현재 등록된 게시물이 없습니다!
          </td>
        </tr>
        <tr v-else v-for="product in products" :key="product.productId">
          <td>
            {{ product.productId }}
          </td>
          <td>
              {{ product.productKategorie }}
          </td>
          <td>
            <router-link :to="{ name: 'ProductReadPage',
                              params: { productId: product.productId.toString() }}">
              {{ product.productName }}
            </router-link>
          </td>
          <td>
            {{ product.productBrand }}
          </td>
          <td>
            {{ product.productPrice }}원
          </td>
          <td>
            {{ product.regDate }}
          </td>
        </tr>
      </table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ProductListFrom",
  props: {
    products: {
      type: Array
    }
  },
}
</script>

<style>
.div {
  display: flex;
  justify-content: center;
}
</style>