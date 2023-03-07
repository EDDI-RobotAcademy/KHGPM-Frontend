<template>
  <v-container>
   <div align="center">
      <h2>상품 상세 페이지</h2>
      <jpa-product-read v-if="product" :product="product"/>
      <p v-else>로딩중 ....... </p>
      <router-link :to="{ name: 'JpaProductModifyPage', params: { productId }}">
         게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to=" { name: 'JpaProductListPage' }">
         돌아가기
      </router-link>
   </div>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>