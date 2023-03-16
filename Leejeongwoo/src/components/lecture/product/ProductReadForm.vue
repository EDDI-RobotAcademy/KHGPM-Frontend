<template>
  <v-container>
    <div>
      <v-row>
        <v-col v-for="(img, idx) in product.imageResourceList" :key="idx" class="img">
          <v-img :src="require(`@/assets/product/${img.imagePath.split('/').pop()}`)" aspect-ratio="1"/>
        </v-col>
        <div class="div">
          <table>
            <tr>
              <td>상품이름</td>
              <td>
                <input type="text" :value="product.productName" readonly />
              </td>
            </tr>
            <tr>
              <td>카테고리</td>
              <td>
                <input type="text" :value="product.kategorie" />
              </td>
            </tr>
            <tr>
              <td>상품 설명</td>
              <td>
                <textarea cols="50" rows="20" :value="product.content" />
              </td>
            </tr>
            <tr>
              <td>브랜드</td>
              <td>
                <input type="text" :value="product.brand" />
              </td>
            </tr>
            <tr>
              <td>가격</td>
              <td>
                <!-- 가격 타입은 number로 맞춰주자  -->
                <input type="number" :value="product.price" />
              </td>
            </tr>
            <tr>
            </tr>
          </table>
        </div>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ProductReadForm",
  props: {
    product: {
      type: Object,
      required: true,
    },
  }
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

table {
  border-collapse: collapse;
  border: 2px solid black;
  margin-bottom: 5px;
}

td {
  padding: 5px;
  border: 2px solid black;
}
.img{
  width: 10%;
}

</style>