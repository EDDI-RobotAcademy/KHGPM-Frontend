<template>
  <v-container>
    <div>
      <h2>상품 상세 페이지</h2>
      <p><mark>등록된 상품을 읽을 수 있으며 삭제 할 수 있는 페이지 입니다. <br>수정페이지로 이동 할 수 있습니다.</mark></p>
      <product-read-form v-if="product" :product="product"/>
      <p v-else>로딩중 .......... </p>
      <router-link :to="{ name: 'ProductModifyPage', params: { productId } }">
        수정하기
      </router-link>
      <button @click="onDelete">삭제</button>
      <router-link :to="{ name: 'ProductListPage' }">
        돌아가기
      </router-link>
    </div>
  </v-container>
</template>

<script>
import ProductReadForm from '@/components/lecture/product/ProductReadForm.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components: { ProductReadForm },
    name: "ProductReadPage",
    props: {
        productId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(['product'])
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
    created () {
        console.log('productId: ' + this.productId)
        this.requestProductToSpring(this.productId)
    }
}
</script>