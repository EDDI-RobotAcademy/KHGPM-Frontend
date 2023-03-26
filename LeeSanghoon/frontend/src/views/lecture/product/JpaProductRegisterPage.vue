<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-product-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue'
import { mapActions } from 'vuex'
//import productModule from '@/store/product/ProductModule'

const productModule = 'productModule'

export default {
    components: { JpaProductRegisterForm },
    name: "JpaProductRegisterPage",
    methods: {
        ...mapActions (
            productModule, ['requestCreateProductToSpring']
        ),
        async onSubmit (payload) {
            await this.requestCreateProductToSpring(payload)
            //await this.$store.dispatch('productModule/requestCreateProductToSpring', payload)
            await this.$router.push({
                name: 'JpaProductListPage'
            })
        }
    }
}

</script>

<style>

</style>