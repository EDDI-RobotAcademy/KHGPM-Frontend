<template>
  <v-container>
    <h2>Vue에서 Spring으로 데이터 전송하기</h2>
    <axios-test-form @submit="onSubmit"/>
  </v-container>
</template>

<script>

//axios 연결
import axios from 'axios'

import AxiosTestForm from '@/components/lecture/axiosTest/AxiosTestForm.vue'

export default {
    name: "axiosTestPage",
    components: { AxiosTestForm },
    methods: {
        onSubmit (payload) {
            const { memberName, major } = payload
            //post 방식으로 url에 데이터 보냄
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