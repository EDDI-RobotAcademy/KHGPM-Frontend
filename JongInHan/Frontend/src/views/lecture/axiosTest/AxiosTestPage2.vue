<template>
  <v-container>
    <h2>Vue에서 Spring으로 데이터 전송하기</h2>
    <emit-test-board-game @submit="onSubmit" />
  </v-container>
</template>

<script>

import axios from 'axios'
import EmitTestBoardGame from '@/components/lecture/emitTest/EmitTestBoardGame.vue';

export default {
  components: { EmitTestBoardGame },
  name: 'AxiosTestPage2',
  methods: {
    onSubmit(payload) {
      const { winner } = payload;
      axios
        .post('http://localhost:7777/vue/first/receive-test', {
          winner
        })
        .then(() => {
          alert('데이터 전송 완료!');
        })
        .catch(() => {
          alert('problem occured!');
        });
    },
  },
};
</script>

<style></style>
