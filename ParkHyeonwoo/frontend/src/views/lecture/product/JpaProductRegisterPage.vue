<template>
  <v-container>
    <h2>상품 등록</h2>
    <jpa-product-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue'
import { mapActions } from 'vuex'

export default {
    components: { JpaProductRegisterForm },
    name: "JpaProductRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateProductToSpring'
        ]),
        async onSubmit (payload) {
            await this.requestCreateProductToSpring(payload) 
            await this.$router.push({ 
                name: 'JpaProductListPage'
            })
        }
    }
}

</script>

<style>

</style>