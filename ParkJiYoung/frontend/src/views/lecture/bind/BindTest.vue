<template>
    <v-container>
        <div>
            <p>Hello {{ message }}</p>
            <p>{{ msg }}</p>
            <p>{{ list[number] }}</p>
        </div>
    </v-container>
</template>

<script>

export default {
  name: 'BindTest',
  data () {
    return {
        message: "test",
        msg: "이렇게 html과 javascript를 변수화하여 연결 할 수 있습니다.",
        list: ['apple', 'banana', 'grape', 'watermelon'],
        number: 1,
    }
  }
}

</script>