<template>
  <v-container>
    <h2>정우 연습 공간</h2>

    <router-link :to="{name: 'VforPractive'}">
      v-for연습
    </router-link> 

    <router-link :to="{name: 'VmodelPractive'}">
      v-model연습
    </router-link> 

    <router-link :to="{name: 'OneRoom'}">
      원룸 만들기
    </router-link>

  </v-container>
</template>

<script>
export default {
  name: "Practive",

}
</script>

<style>

</style>