<template>
  <v-container>
    <h2>Vue에서 Spring 으로 데이터 전송하기</h2>
    <axios-test-page-form @submit="onSubmit"/>
  </v-container>
</template>

<script>

import axios from 'axios'
import AxiosTestPageForm from '@/components/lecture/axiosTest/AxiosTestPageForm.vue'

export default {
    name: "AxiosTestForm",
    components: { AxiosTestPageForm },
    methods: {
        onSubmit(payload) {
            const { memberName, major } = payload
            axios.post('http://localhost:7777/vue/first/receive-test',
                { memberName, major }
            )
            
            .then(() => {
                alert('데이터 전송 완료!')
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