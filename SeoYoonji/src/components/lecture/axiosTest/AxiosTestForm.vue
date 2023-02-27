<template>
    <!--.prevent : 기본 이벤트를 막아줌, 원래 submit 을 누르면 제출이 실행되야 하지만 onSubmit이라는 메서드를 실행하게 함-->
    <form @submit.prevent="onSubmit">
        <table>
            <tr>
                <td>이름</td>  
                <td>
                    <input type="text" v-model="memberName"/>
                </td>  
            </tr>
            <tr>
                <td>전공</td>  
                <td>
                    <input type="text" v-model="major"/>
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
      name: "axiosTestForm",
      data () {
          return {
              memberName: '이름을 작성하세요',
              major: '전공을 기입하세요',
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