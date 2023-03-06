<template>
  <div>
    {{ initialValue }}
  </div>
</template>

<script>

export default {
    name: "LocalComponent",
    props: {
        initialValue: Number //Number는 자바스크립트에서 타입
    }
}

</script>

<style>

</style>