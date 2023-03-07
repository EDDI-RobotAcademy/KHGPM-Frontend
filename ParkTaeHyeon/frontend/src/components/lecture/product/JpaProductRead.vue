<template>
    <div>
    <table>
        <tr>
            <td>게시물 번호</td>
            <td>
                <input type="text" :value="product.productId" readonly/>
            </td>
        </tr>
        <tr>
            <td>상품명</td>
            <td>
                <input type="text" :value="product.name" readonly/>
            </td>
        </tr>
        <tr>
            <td>가격</td>
            <td>
                <input type="text" :value="product.price" readonly/>
            </td>
        </tr>
        <tr>
            <td>내용</td>
            <td>
                <textarea cols="50" rows="20" :value="product.productContent" readonly/>
            </td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    name: "JpaProductRead",
    props: {
        board: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
</style>