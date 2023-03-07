<template>
  <div>
    <table class="product-read-table">
        <tr>
            <td>상품 번호</td>
            <td><input type="text" :value="product.productNo" readonly/></td>
        </tr>
        <tr>
            <td>상품명</td>
            <td><input type="text" :value="product.name" readonly/></td>
        </tr>
        <tr>
            <td>가격</td>
            <td><input type="text" :value="product.price" readonly/></td>
        </tr>
        <tr>
            <td>작성자</td>
            <td><input type="text" :value="product.writer" readonly/></td>
        </tr>
        <tr>
            <td>본문</td>
            <td><textarea cols="50" rows="20" :value="product.content" readonly/></td>
        </tr>
    </table>
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
    .product-read-table td {
        border : 2px solid;
    }
</style>