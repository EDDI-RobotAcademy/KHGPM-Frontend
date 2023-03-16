<template>
  <v-container>
    <h2>게시물 작성</h2>
    <board-register-form @submit="onSubmit">
  </v-container>
</template>

<script>
import BoardRegisterForm from '@/components/board/BoarRegisterForm.vue';
import { mapActions } from 'vuex';
export default {
    components: {BoardRegisterForm},
    name: 'BoardRegisterPage',
    methods: {
        ...mapActions(['requestCreateBoardToSpring']),
        async onSubmit(payload) {
            await this.requestCreatBoardToSpring(payload);
            // await this.$router.push({
                // name: 'BoardListPage',
            // });
        },
    },
};
</script>

<style></style>
