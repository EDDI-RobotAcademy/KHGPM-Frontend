<template>
    <div class="row">
        <div class="col-8" v-for="image in product.imageList" :key="image">
            <v-img :src="require(`@/assets/uploadImgs/${image.imagePath}`)" aspect-ratio="1" class="grey lighten-2 w-50 h-70"/>
            <!-- <img :src="require('@/assets/uploadImgs/pumpkinTea.jpg')" aspect-ratio="1" class="grey lighten-2 w-50 h-70"/> -->
        </div>
        
        <div class="col-4">
            <div>
                {{ product.writer }}
            </div>
            <div>
                {{ product.name }}
            </div>
            <div>
                {{ product.price }}
            </div>
            <div>
                {{ product.content }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'JpaProductRead',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}

</script>

<style>

</style>