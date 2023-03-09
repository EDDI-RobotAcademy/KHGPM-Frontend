<template>
  <v-container>
    <div>
      <div class="div">
        <table>
            <tr>
              <td>게시물 번호</td>
              <td>
                  <input type="text" :value="product.productId" disabled/>
              </td>
          </tr>
          <tr>
            <td>상품이름</td>
            <td>
              <input type="text" :value="product.productName" readonly/>
            </td>
          </tr>
          <tr>
            <td>카테고리</td>
            <td>
              <input type="text" :value="product.productKategorie"/>
            </td>
          </tr>
          <tr>
            <td>상품 설명</td>
            <td>
              <textarea cols="50" rows="20" :value="product.productContent"/>
            </td>
          </tr>
          <tr>
            <td>브랜드</td>
            <td>
                <input type="text" :value="product.productBrand"/>
            </td>
        </tr>
          <tr>
            <td>가격</td>
            <td>
              <!-- 가격 타입은 number로 맞춰주자  -->
              <input type="number" :value="product.productPrice"/>
            </td>
          </tr>
        </table>
      </div>
      <v-row>
        <v-col>
        <v-img :src="image" aspect-ratio="1" class="grey lighten-2" ></v-img>
      </v-col>
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
        }
    }
}
</script>

<!-- <style>
.div{
  display: flex;
  justify-content: center;
}

</style> -->