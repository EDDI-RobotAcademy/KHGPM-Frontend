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
              <input type="text" v-model="productName"/>
            </td>
          </tr>
          <tr>
            <td>카테고리</td>
            <td>
              <input type="text" v-model="productKategorie"/>
            </td>
          </tr>
          <tr>
            <td>상품 설명</td>
            <td>
              <textarea cols="50" rows="20" v-model="productContent"/>
            </td>
          </tr>
          <tr>
            <td>브랜드</td>
            <td>
                <input type="text" v-model="productBrand"/>
            </td>
        </tr>
          <tr>
            <td>가격</td>
            <td>
              <input type="text" v-model="productPrice"/>
            </td>
          </tr>
        </table>
      </div>
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