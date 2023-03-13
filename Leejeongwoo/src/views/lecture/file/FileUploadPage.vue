<template>
    <v-container>
        <div class="div">
            <h3>Vue 파일 업로드</h3>
            <!-- <div>
            <label>Files
                <input type="file" id="files" ref="files" multiple @change="handleFileUpload" />
            </label>
            <button @click="submitFiles">파일 + 문자열 전송</button>
        </div> -->
            <!-- <div>
                <div style="border: solid 2px;">
                    <img  id="img" style="border: solid 2px;"/>
                </div>
                <label id="imagePreview" style="border: solid 2px;">
                    <input type="file" @change="readInputFile" id="files" ref="files" multiple />
                </label>
                    <button @click="submitFiles">Submit files + strings</button>
            </div>
        </div> -->
            <div>
                <img :src="imgUrl" id="img" />
            </div>
            <label id="imagePreview">
            </label>
            <input type="file" id="files" ref="files" multiple @change="readInputFile"/>
            <div>
                <button @click="submitFiles">Submit files + strings</button>
            </div>
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
            for (let idx = 0; idx < this.files.length; idx++) {
                formData.append('fileList', this.files[idx])
            }

            // 글자
            formData.append(
                "info",
                new Blob([JSON.stringify(fileinfo)], { type: "application/json" })
            )

            axios.post('http://localhost:7777/file/uploadImgsWithText', formData)
                .then(res => {
                    alert('처리 결과: ' + res.data)
                })
                .catch(() => {
                    alert('문제 발생!')
                })
        },

    }
}
</script>
<script setup>
import $ from 'jquery';
const readInputFile = (e) => {// 미리보기 기능구현
    $('#imagePreview').empty();
    var files = e.target.files;
    var fileArr = Array.prototype.slice.call(files);
    console.log(fileArr);
    fileArr.forEach(function (f) {
        if (!f.type.match("image/.*")) {
            alert("이미지 확장자만 업로드 가능합니다.");
            return;
        };
        var reader = new FileReader();
        reader.onload = function (e) {
            var html = `<img src=${e.target.result} />`;
            $('#imagePreview').append(html);
        };
        reader.readAsDataURL(f);
    })
}
</script>

<style scoped>
#imagePreview {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 2px;
    height: 300px;
    width: 300px;
}

div label{
    text-align: center;
}
</style>