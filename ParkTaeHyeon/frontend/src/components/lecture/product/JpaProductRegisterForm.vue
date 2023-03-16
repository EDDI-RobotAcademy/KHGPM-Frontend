<template>
    <form @submit.prevent="onSubmit">
    <table>
        <tr>
            <td>상품명</td>
            <td>
                <input type="text"  v-model="productName"/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" v-model="writer"/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <textarea cols="50" rows="20" v-model="content"/>
            </td>
        </tr>
        <tr>
            <td>가격</td>
            <td>
                <input type="number" v-model="price"/>
            </td>
        </tr>
        <tr>
            <td>이미지 추가</td>
            <td>
                <input type="file" id="files" ref="files"
                    multiple @change="handleFileUpload" />
            </td>
        </tr>
    </table>

    <div>
        <button type="submit">등록</button>
        <router-link to="{ name: 'JpaProductListPage' }">
        취소
        </router-link>
    </div>
    </form>
</template>

<script>

export default {
    name: "JpaBoardRegisterForm",
    data () {
        return {
            productName: '상품명을 입력하세요.',
            writer: '누구세요 ?',
            content: '내용을 입력하세요.',
            price: 0,
            files: '',
        }
    },
    methods: {
        onSubmit () {
            let formData = new FormData()

            for (let idx = 0; idx < this.files.length; idx++) {
                formData.append('imageFileList', this.files[idx])
            }

            const { productName, writer, content, price } = this

            let productInfo = {
                productName: productName,
                writer: writer,
                content: content,
                price: price,
            }

            formData.append(
                "productInfo",
                new Blob([JSON.stringify(productInfo)], { type: "application/json" })
            )

            // formData test
            // for (let key of formData.keys()) {
            //     console.log(key);
            // }
            // for (let value of formData.values()) {
            //     console.log(value);
            // }
            
            this.$emit('submit', formData)
        },

        handleFileUpload() {
            this.files = this.$refs.files.files
        }
    }
}
</script>

<style>
</style>