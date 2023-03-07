<template>
    <div>
      <h3>상품 목록</h3>
      <table>
        <tr>
          <th align="center" width="100">No</th>
          <th align="center" width="640">상품명</th>
          <th align="center" width="150">가격</th>
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
            <router-link :to="{ name: 'JpaBoardReadPage',
                              params: { productId: product.productId.toString() }}">
              {{ product.name }}
            </router-link>
          </td>
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