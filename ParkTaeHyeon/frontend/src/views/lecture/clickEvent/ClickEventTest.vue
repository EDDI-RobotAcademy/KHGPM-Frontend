<template>
    <v-container>
        <div>
            <p>{{ count }} 번 클릭했습니다!</p>
            <button @click="increment">카운트하기</button>
        </div>
    </v-container>
</template>

<script>
export default {
name: 'ClickEventTest',
data () {
    return {
        count: 0
    }
},
methods: {
    increment () {
    this.count += 1
    }
}
}
</script>