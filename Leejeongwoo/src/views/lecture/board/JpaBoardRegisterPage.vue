<template>
  <v-container>
    <h2>게시글 작성</h2>
    <p><mark>게시글 목록을 작성하는 페이지 입니다.</mark></p>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue';
import { mapActions } from 'vuex'

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    methods: {
    ...mapActions([
      //보드생성을 스프링한테 요청하겠다라는 의미
      'requestCreateBoardToSpring'
    ]),
    async onSubmit(payload){
      await this.requestCreateBoardToSpring(payload)
      await this.$router.push({
        //글작성 완료 되면 페이지 이동? redirect
        name: 'JpaBoardListPage'
      })
    }
  }
}
</script>

<style>

</style>
