<template>
    <div class="container" align="center">
        <h2 class="mb-3">상품 등록</h2>
        <jpa-product-register-form @submit="onSubmit"/>
    </div>
</template> 

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    name: "JpaProductRegisterPage",
    components: { JpaProductRegisterForm },
    methods: {
        ...mapActions([
            'requestCreateProductToSpring'        // Product 만드는 것을 Spring 에게 요청한다~
        ]),
        async onSubmit(payload) {
            console.log("Page: "+ payload.name)
            const product = await this.requestCreateProductToSpring(payload)
            await this.$router.push({           // 강제로 ProductList 로 돌아가라!
                name: 'JpaProductReadPage', params: { productNo: product.data.productNo.toString() }
            })
        }
    }
}

</script>

<style>

</style>