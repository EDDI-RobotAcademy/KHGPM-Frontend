<template>
    <div>
        <div class="row">
            <div class="col-4 my-5" style="height: 250px;" v-for="product in products" :key="product.productNo">
                <div class="border border-1 h-100 text-center"> 
                    이미지
                </div>
                <div>
                    <router-link :to="{ name: 'JpaProductReadPage', params: { productNo: product.productNo.toString() }}">
                        {{ product.name }}
                    </router-link>
                </div>
                <div>
                    {{ product.price }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: "JpaProductList",
    props: {
        products: {
            type: Array
        }
    }
}

</script>

<style>
    
</style>