<template>
    <div class="shopping-mall">
      <router-link to="/shop-register-page">상품 등록 하러가기</router-link>
      <div class="products-container">
        <div class="product" v-for="(product, index) in products" :key="index">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p>{{ product.price }}₩</p>
          <button @click="addToCart(product)">장바구니에 담기</button>
        </div>
      </div>
      <div class="cart-container">
        <h2>Cart</h2>
        <ul>
          <li v-for="(item, index) in cart" :key="index">
            {{ item.name }} - Quantity: {{ item.quantity }} - Total: ${{
              item.price * item.quantity
            }}
          </li>
        </ul>
        <p>Total: ${{ total }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: '상품 1',
          description: '상품설명',
          price: 10000,
        },
        {
          name: '상품 2',
          description: '상품설명',
          price: 15000,
        },
        {
          name: '상품 3',
          description: '상품설명',
          price: 20000,
        },
        {
          name: '상품 4',
          description: '상품설명',
          price: 25000,
        },
      ],
      cart: [],
    };
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
}</style>
