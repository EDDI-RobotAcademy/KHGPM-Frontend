<template>
    <v-container>
      <h3>Vue 파일 업로드</h3>
      <div>
        <label>Files
          <input type="file" id="files" ref="files"
              multiple @change="handleFileUpload"/>
        </label>
 
        <button @click="submitFiles">파일 + 문자열 전송</button>
      </div>
    </v-container>
  </template>
 
  <script>
  import axios from 'axios'
  export default {
      name: "FileUploadPage",
      data () {
          return {
              files: '',
          }
      },
      methods: {
          handleFileUpload () {
              this.files = this.$refs.files.files
          },
          submitFiles () {
              let formData = new FormData()
              let fileinfo = {
                  price: 50000,
                  test: "test",
              }
              // 사진
              for (let idx = 0; idx < this.files.length; idx++) {
                  formData.append('fileList', this.files[idx])
              }
              // 글자
              formData.append(
                  "info",
                  new Blob([JSON.stringify(fileinfo)], { type: "application/json" })
              )
              axios.post('http://localhost:7777/file/uploadImgsWithText', formData)
                  .then (res => {
                      alert('처리 결과: ' + res.data)
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