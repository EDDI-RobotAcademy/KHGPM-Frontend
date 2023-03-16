<template>
    <v-container>
      <div align="center">
        <h2>상품 수정</h2>
        <jpa-product-modify-form v-if="board" :product="product" @submit="onSubmit"/>
        <p v-else>로딩중 ........</p>
      </div>
    </v-container>
</template>
  
<script>
  
import JpaProductModifyForm from '@/components/lecture/product/JpaProductModifyForm.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaProductModifyForm },
    name: "JpaBoardModifyPage",
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
            'requestProductModifyToSpring',
        ]),
        async onSubmit (payload) {
        const { productName, content, writer, price } = payload
        const productId = this.productId

        await this.requestProductModifyToSpring(
            { productId, productName, content, writer, price })
        await this.$router.push({
            name: 'JpaProductReadPage',
            params: { productId: this.productId }
        })
        }
    },
    created () {
        this.requestProductToSpring(this.productId)
    }
}

</script>

<style>

</style>
<!--
board 변수가 존재할 때에만 jpa-product-modify-form 컴포넌트가 렌더링
-->
<!--
router에서 parameter를 전달해서 각각의 다른 데이터를 가진 페이지로 이동할때
required: true라는 구문이 필요하다.
해당 view를 접근할때 해당하는 상품정보를 확인하기 위해 productId를 사용하였으니
부모로부터(접속을 실행한 페이지)에서 전달된 파라메터의 데이터타입을 명시하였다.
-->
<!--
computed 속성은 계산된 데이터를 반환하는 함수이며, 
mapState 함수를 사용하여 Vuex 스토어의 상태를 가져와 계산할 수 있습니다. 
이렇게 computed 속성을 사용하면 화면에 필요한 데이터를 쉽게 계산하고, 
필요한 상태를 간단하게 가져올 수 있습니다.
-->
<!--
나중에쓸 Vuex의 액션 함수들을 미리 선언해놔서 밑에서 쓸수있게 해두었다.
원래 해당 루트는 @/src/store/action.js안에 선언되어있다.
-->
<!--
이를 사용하면 Vuex 액션 함수를 Vuex 스토어에서 직접 호출하는 대신, 
해당 컴포넌트에서 액션 함수를 호출할 수 있습니다. 
이는 Vuex 스토어에 대한 의존성을 줄이고, 
코드를 더 간결하게 유지할 수 있도록 도와줍니다.
-->
<!-- 
async : onSubmit 함수에대해 비동기처리를 실행한다.
payload : JpaProductModifyForm 컴포넌트에서 실행된 수정된 데이터가 넘어와있다.
 -->