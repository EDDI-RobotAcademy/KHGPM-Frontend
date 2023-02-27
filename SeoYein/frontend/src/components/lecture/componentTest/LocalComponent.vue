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
                    // Number 타입 지정!
    }
}
</script>

<style>

</style>