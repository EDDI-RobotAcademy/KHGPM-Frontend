<template>
  <v-container>
    <global-component :initial-test="counter" :increment-value="incValue1"/><br>
    <global-component :initial-test="start" :increment-value="incValue15"/><br>
    <br>
    <local-component :initial-value="num"/>
    <local-component :initial-value="num2"/>
    <local-component :initial-value="num3"/>
    <local-component :initial-value="num4"/>
    <button @click="plus">클릭해봐!</button>
  </v-container>
</template>

<script>
import LocalComponent from '@/components/lecture/componentTest/LocalComponent.vue';

export default {
    name: "ComponentTest",
    components: {
      'local-component': LocalComponent
    },
    data () {
        return {
            counter: 0,
            start: 100,
            incValue1: 1,
            incValue15: 15,
            num: 30,
            num2: 40,
            num3: 50,
            num4: 60
        }
    },
    methods: {
      plus() {
        this.num += 1;
        this.num2 -= 1;
        this.num3 += 1;
        this.num4 -= 1;
      }
    }
}

</script>

<style>

</style>