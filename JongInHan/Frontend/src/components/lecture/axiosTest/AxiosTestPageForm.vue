<template>
  <v-container>
    <form @submit.prevent="onSubmit">
      <table>
        <tr>
          <td>이름</td>
          <td>
            <input type="text" v-model="memberName" />
          </td>
        </tr>

        <tr>
          <td>전공</td>
          <td>
            <input type="text" v-model="major" />
            <input type="text" v-model="x" />
          </td>
        </tr>

        <div>
          <button type="submit">전송</button>
        </div>
      </table>
    </form>
  </v-container>
</template>

<script>
export default {
  name: 'AxiosTestPageForm',
  data() {
    return {
      memberName: '이름을 작성하세요',
      major: '전공을 기입하세요',
      x: 'asdf',
    };
  },
  methods: {
    onSubmit() {
      //   console.log('test : ' + memberName, major, x);
      const { memberName, major, x } = this;
      console.log('test' + memberName, major, x);
      this.$emit('submit', { memberName, major, x });
    },
  },
};
</script>

<style></style>
