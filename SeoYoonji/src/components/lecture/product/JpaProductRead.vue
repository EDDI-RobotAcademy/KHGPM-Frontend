<template>
    <div>
      <table>
          <tr>
              <td>상품No</td>
              <td>
                  <input type="text" :value="product.productId" readonly/>
              </td>
          </tr>
          <tr>
              <td>상품명</td>
              <td>
                  <input type="text" :value="product.title" readonly/>
              </td>
          </tr>
          <tr>
              <td>가격</td>
              <td>
                  <input type="int" :value="product.price" readonly/>
              </td>
          </tr>
          <tr>
              <td>상세정보</td>
              <td>
                  <textarea cols="30" rows="10" :value="product.detail" readonly/>
              </td>
          </tr>
          <tr>
              <td>등록일자</td>
              <td>
                  <input type="text" :value="product.regDate" readonly/>
              </td>
          </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
      name: "JpaProductRead",
      props: {
        product: {
              type: Object,
              required: true,
          }
      }
  }
  </script>
  
  <style>
  
  </style>