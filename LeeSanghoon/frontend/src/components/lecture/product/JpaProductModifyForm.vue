<template>
  <div>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
            <td>상품 번호</td>
            <td>
                <input type="text" :value="product.productId" disabled/>
            </td>
        </tr>
        <tr>
            <td>상품명</td>
            <td>
                <input type="text" v-model="productName"/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" :value="product.writer" disabled/>
            </td>
        </tr>
        <tr>
            <td>등록일자</td>
            <td>
                <input type="text" :value="product.regDate" disabled/>
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
            <td>사진 변경</td>
            <td>
            <input type="file" id="files" ref="files"
                multiple @change="handleFileUpload"/>
            </td>
        </tr>
      </table>

      <v-row>
        <v-col v-for="(imagePath, idx) in productImages" :key="idx" cols="12">
            <v-img :src="require(`@/assets/uploadImgs/${imagePath.imageResourcePath}`)" aspect-ratio="1" class="grey lighten-2">
            <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"/>
                </v-row>
            </template>
            </v-img>
        </v-col>
      </v-row>

      <div>
        <button type="submit">수정 완료</button>
        <router-link :to="{ name: 'JpaProductReadPage',
                            params: { productId: product.productId.toString() }}">
          취소
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>

export default {
    name: "JpaProductModifyForm",
    props: {
        product: {
            type: Object,
            required: true,
        },
        productImages: {
            type: Array,
        }
    },
    data () {
        return {
            productName: '',
            content: '',
            writer: '',
            regDate: '',
            price: 0,
            files: '',
        }
    },
    created () {
        this.productName = this.product.productName
        this.writer = this.product.writer
        this.content = this.product.content
        this.regDate = this.product.regDate
        this.price = this.product.price
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

            console.log('productInfo: ' + JSON.stringify(productInfo))
            formData.append(
                "productInfo",
                new Blob([JSON.stringify(productInfo)], { type: "application/json" })
            )
            console.log('formData: ' + JSON.stringify(formData))
            this.$emit('submit', formData)
        },
        handleFileUpload () {
            this.files = this.$refs.files.files
        },
    },
    mounted () {
        console.log('files: ' + this.productImages)
    }
}

</script>

<style>

</style>