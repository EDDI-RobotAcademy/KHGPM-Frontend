<template>
  <div>
    {{  initialValue }}
  </div>
</template>

<script>

export default {
    name: "LocalComponent",
    props: {
        initialValue: Number  //type 지정
    }
}
</script>

<style>

</style>