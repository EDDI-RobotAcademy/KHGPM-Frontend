<template>
    <div>
        {{ initialValue }}
    </div>
</template>

<script>
export default {
    name: "LocalComponent",
    // name은 클래스명과 동일하게 지정
    props: {
        initialValue: Number
    }
}
</script>

<style>
</style>