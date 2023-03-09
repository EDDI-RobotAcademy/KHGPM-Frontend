<template>
  <div>
    {{ initialValue }}
  </div>
</template>

<script>

export default {
    name: "LocalComponent",
    props: {
        initialValue: Number
                    // 타입지정(숫자) 
    }
}
</script>

<style>

</style>