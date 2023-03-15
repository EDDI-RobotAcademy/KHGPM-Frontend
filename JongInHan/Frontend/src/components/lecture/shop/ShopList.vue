<template>
  <div class="shopping-mall">
    <router-link to="/shop-register-page">상품 등록 하러가기</router-link>
    <div class="products-container">
      <div
        v-if="!products || (Array.isArray(products) && products.length === 0)"
      >
        현재 등록된 상품이 없습니다!
      </div>
      <div v-else v-for="(product, index) in products" :key="product.productId">
        <h2>{{ product.name }}</h2>
        <pre>{{ product.imageDataList }}</pre>
        <carousel>
        <slide v-for="(imageData, index) in product.imageDataList" :key="index">
        <img :src="getImagePath(imageData)" aspect-ratio="1" class="grey
        lighten-2" />
      </slide>
      </carousel>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}₩</p>
        <button @click="addToCart(product)">장바구니에 담기</button>
        <router-link
          :to="{ name: 'ShopModifyPage', params: { productId: index } }"
        >
          게시물 수정
        </router-link>
      </div>
    </div>
    <div class="cart-container">
      <h2>Cart</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - Quantity: {{ item.quantity }} - Total: won{{
            item.price * item.quantity
          }}
        </li>
      </ul>
      <p>Total: ${{ total }}</p>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'ShopList',
  components: {
    Carousel,
    Slide,
  },
  props: {
    products: {
      type: Array,
    },
  },
  data() {
    return {
      cart: [],
    };
  },
  created() {
    console.log('products:', this.products);
  },
  computed: {
    total() {
      let sum = 0;
      for (let item of this.cart) {
        sum += item.price * item.quantity;
      }
      return sum;
    },
  },
  methods: {
    addToCart(product) {
      let index = this.cart.findIndex((item) => item.name === product.name);
      if (index === -1) {
        this.cart.push({ ...product, quantity: 1 });
      } else {
        this.cart[index].quantity += 1;
      }
    },
    getImagePath(imageData) {
      return require(`@/assets/${imageData}`);
    },
  },
};
</script>

<style>
.shopping-mall {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}
.cart-container {
  margin-top: 50px;
}
</style>
