<template>
  <v-container>
    <div align="center">
      <h2>상품 상세 페이지</h2>
      <product-read v-if="product" :product="product"/>
      <p v-else>로딩중 .......... </p>
      <router-link :to="{ name: 'ProductModifyPage', params: { productId } }">
        게시물 수정
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to="{ name: 'ProductListPage' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>


<script>

import ProductRead from '@/components/lecture/product/ProductRead.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { ProductRead },
    name: "ProductReadPage",
    props: {
        productId: {
            type: String,
            required: true,
            // 반드시 전달되어야 하는 정보 표시
        }
    },
    computed: {
        ...mapState(['product']) // 여기서의 board는 낱개
    },
    methods: {
        ...mapActions([
            'requestProductToSpring',
            'requestDeleteProductToSpring'
        ]),
        async onDelete () {
            await this.requestDeleteProductToSpring(this.productId)
            await this.$router.push({ name: 'ProductListPage' })
        }
    },
    created () { // 객체가 생성될때 요청?
        console.log('productId: ' + this.productId)
        this.requestProductToSpring(this.productId)
    }    

}
</script>

<style>

</style>