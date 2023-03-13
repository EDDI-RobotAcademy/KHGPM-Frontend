<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit" />
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue';
import { mapActions } from 'vuex';

export default {
  components: { JpaBoardRegisterForm },
  name: 'JpaBoardRegisterPage',
  methods: {
    ...mapActions(['requestCreateBoardToSpring']),
    async onSubmit(payload) {
      const boardId = await this.requestCreateBoardToSpring(payload);
      const boardIdNumber = String(boardId);
      // console.log(boardId);
      await this.$router.push({
        name: 'JpaBoardReadPage',
        params: { boardId: boardIdNumber },
      });
    },
  },
};
</script>

<style></style>
