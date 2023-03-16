<template>
  <form @submit.prevent="onSubmit">
    <table class="product-register-table">
        <tr>
            <td>상품명</td>
            <td><input type="text" v-model="name"/></td>
        </tr>
        <tr>
            <td>가격</td>
            <td><input type="text" v-model="price"/></td>
        </tr>
        <tr>
            <td>작성자</td>
            <td><input type="text" v-model="writer"/></td>
        </tr>
        <tr>
            <td>상품내용</td>
            <td><textarea cols="50" rows="20" v-model="content"/></td>
        </tr>
        <tr>
            <td>사진 추가</td>
            <td>
                <input type="file" id="files" ref="files" multiple @change="handleFileUpload"/>
            </td>
        </tr>
    </table>
    
    <div>
        <button type="submit" class="btn btn-outline-primary me-2">등록</button>
        <router-link :to="{ name: 'JpaProductListPage' }">
            <button type="button" class="btn btn-outline-danger">취소</button>
        </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: 'JpaProductRegisterForm',
    data() {
        return {
            name: '상품명',
            price: 0,
            writer: '작성자',
            content: '상품내용',
            files: '',
        }
    },
    methods: {
        onSubmit() {
            let formData = new FormData()

            // 파일(이미지)
            for (let idx = 0; idx < this.files.length; idx++) {
                formData.append('imageFileList', this.files[idx])
            }

            // 글자
            const { name, writer, content, price } = this
            let productInfo = {
                name: name,
                price: price,
                writer: writer,
                content: content
            }
            console.log('productInfo: ' + JSON.stringify(productInfo))

            formData.append(
                "productInfo",
                new Blob([JSON.stringify(productInfo)], { type: "application/json" })
            )
            
            console.log('이거슨 formData: ' + JSON.stringify(formData))
            this.$emit('submit', formData)

            // this.$emit('submit', { name, writer, content, price })
        },
        handleFileUpload() {
            this.files = this.$refs.files.files
        },
    }
}

</script>

<style>
.product-register-table td {
    border : 2px solid;
}
</style>