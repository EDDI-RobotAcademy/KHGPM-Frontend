<template>
  <v-container>
    <h2>게시물 작성</h2>
    <product-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>

import ProductRegisterForm from '@/components/lecture/product/ProductRegisterForm.vue'
import { mapActions } from 'vuex'
        // 맵액션즈는 엑시오스 스토어에 있는 액션이랑 매핑됨

export default {
    components: { ProductRegisterForm },
    name: "ProductRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateProductToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestCreateProductToSpring(payload)
            // this.~~가 끝날때까지 기다리라는 뜻의 await
            await this.$router.push({
              // $는 view가 라우터 정보를 제어하기 위함. 강제로 다른 페이지로 이동
              name: 'ProductListPage'
            })
        }
    }
}
</script>

<style>
</style>