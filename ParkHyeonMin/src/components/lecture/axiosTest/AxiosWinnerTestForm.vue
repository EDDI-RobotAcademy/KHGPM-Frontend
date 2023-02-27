<template>
    <div></div>
</template>

<script>
export default {
    name: "AxiosWinnerTestForm",
    data() {
        return {
            winner: '승자',
        }
    },
    methods: {
      onSubmit() {
          const {winner} = this
          this.$emit('submit', {winner})
      }
    }
}
</script>

<style>

</style>