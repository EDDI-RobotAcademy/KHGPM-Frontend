<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-product-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaProductRegisterForm from '@/components/lecture/product/JpaProductRegisterForm.vue'
import { mapActions } from 'vuex'
import store from '@/store'

export default {
    components: { JpaProductRegisterForm },
    name: "JpaProductRegisterPage",
    methods: {
        // ...mapActions ([
        //     'ProductModule', ['requestCreateProductToSpring']
        // ]),
        async onSubmit (payload) {
            //await this.requestCreateProductToSpring(payload)
            store.dispatch('ProductModule/requestCreateProductToSpring', payload)
            await this.$router.push({
                name: 'JpaProductListPage'
            })
        }
    }
}

</script>

<style>

</style>