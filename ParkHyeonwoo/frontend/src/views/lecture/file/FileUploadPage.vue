<template>
  <v-container>
   <h3>Vue 파일 업로드</h3>
   <div>
      <label>Files
         <input type="file" id="files" ref="files" multiple @change="handleFileUpload"/>
      </label>

      <button @click="submitFiles">파일 + 문자열 전송</button>
   </div>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
   name: "FileUploadPage",
   data() {
      return {
         files: '',
      }
   },
   methods: {
      handleFileUpload() {
         this.files = this.$refs.files.files
      },
      submitFiles() {
         let formData = new FormData()

         let fileinfo = {
            price: 50000,
            test: "test",
         }

         // 사진
         for(let idx = 0; idx < this.files.length; idx++) { // 업로드한 파일 전부 formData에 담는다.
            formData.append('fileList', this.files[idx]) // fileList -> MULTIPART_FORM_DATA, List형식으로 전송
         }

         // 글자
         formData.append(
            "info",
            new Blob([JSON.stringify(fileinfo)], { type: "application/json" }) // info -> APPLICATION_JSON_VALUE
         )

         axios.post('http://localhost:7777/file/uploadImgsWithText', formData)
            .then(res => {
               alert('처리 결과: ' + res.data) // res.data -> Spring FileController 의 리턴값
            })
            .catch(() => {
               alert('문제 발생!')
            })
      }
   }

}
</script>

<style>

</style>