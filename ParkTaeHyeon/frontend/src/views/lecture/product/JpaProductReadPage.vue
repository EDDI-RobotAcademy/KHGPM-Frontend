<template>
    <v-container>
        <div align="center">
            <h2>Vue + Spring 게시판 읽기</h2>
                <jpa-product-read v-if="product" :product="product"/>
                    <p v-else>로딩중 .... </p>
            <router-link :to="{ name: 'JpaProductListPage' }">
            돌아가기
            </router-link>
        </div>
    </v-container>
</template>

<script>
import JpaProductRead from '@/components/lecture/product/JpaProductRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaProductRead },
    name: "JpaProductReadPage",
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
            'requestProductToSpring'
        ]),
    },
    created () {
        console.log('productId: ' + this.product)
        this.requestProductToSpring(this.ProductId)
    }
}
</script>
