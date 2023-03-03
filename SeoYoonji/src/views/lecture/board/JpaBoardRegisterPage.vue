<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue';

export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
}
</script>

<style>

</style>