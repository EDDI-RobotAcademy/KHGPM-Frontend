<template>
   <!-- submit 버튼을 누르면 기존의 submit 기본 동작 대신 onSubmit 함수가 실행되게끔 한다. -->
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
   name: "AxiosTestForm",
   data() {
      return {
         memberName: '이름을 작성하세요',
         major: '전공을 기입하세요',
      }
   },
   methods: {
      onSubmit() {
         const { memberName, major } = this
         this.$emit('submit', { memberName, major })
      }
   }
}
</script>

<style>

</style>