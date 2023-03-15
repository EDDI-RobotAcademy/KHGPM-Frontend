<template>
    <v-row>
        <v-col class="my-5" v-for="product in products" :key="product.productNo" cols="4">
            <div v-for="image in product.imageList" :key="image.imageId">
                <v-img :src="require(`@/assets/uploadImgs/${image.imagePath}`)" aspect-ratio="1" class="grey lighten-2"/>
            </div>
            <div>
                <router-link :to="{ name: 'JpaProductReadPage', params: { productNo: product.productNo.toString() }}">
                    {{ product.name }}
                </router-link>
                <br>
                {{ product.price }}원
            </div>
        </v-col>
    </v-row>
</template>

<script>

export default {
    name: "JpaProductList",
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            
        }
    }
}

</script>

<style>
    
</style>