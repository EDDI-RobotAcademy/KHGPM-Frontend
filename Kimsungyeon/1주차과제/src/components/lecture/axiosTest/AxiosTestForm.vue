<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>이름</td>
        <td>
          <input type="text" placeholder="이름을 입력하세요" v-model="memberName"/>
        </td>
      </tr>

      <tr>
        <td>전공</td>
        <td>
          <input type="text" placeholder="전공을 입력하세요" v-model="major"/>
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">전송</button>
    </div>
  </form>
</template>

<script>

export default {
    name: "AxiosTestForm",
    data () {
        return {
            memberName: '',
            major: '',
        }
    },
    methods: {
        onSubmit () {
            const { memberName, major } = this
            this.$emit('submit', { memberName, major })
        }
    }
}

</script>

<style>

</style>