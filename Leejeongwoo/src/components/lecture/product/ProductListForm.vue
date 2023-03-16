<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, idx) in products" :key="idx" cols="3">
        <div v-for="(img, idx) in product.imageResourceList" :key="idx">
          <router-link :to="{
            name: 'ProductReadPage',
            params: { productId: product.productId.toString() }}">
            <v-img :src="require(`@/assets/product/${img.imagePath.split('/').pop()}`)" 
                    aspect-ratio="1" >
            </v-img>
          </router-link>
        </div>
        <p class="product-brand">{{ product.brand }}</p>
        <p class="product-name">{{ product.productName }}</p>
        <p class="product-price">{{ product.price | numberFormat }} won</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductListForm",
  props: {
    products: {
      type: Array
    }
  },
  filters: {
    // 상품 금액 천단위 콤마 찍기
    numberFormat(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.div {
  display: flex;
  justify-content: center;
}

.preview-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 9999;
  max-width: 800px;
  /* adjust the value as needed */
  margin: auto;
}

.product-brand {
  margin-top: 5px;
  font-weight: bold;
}

.product-name {
  font-size: 1.2em;
}

.product-price {
  color: green;
}
</style>