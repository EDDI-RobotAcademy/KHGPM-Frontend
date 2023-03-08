<template>
  <form @submit.prevent="onSubmit">
    <!-- @submit.prevent 는 html에서 제공하는 기본 submit 기능을 막고, 
    개발자가 직접 입력한 커스텀 메서드인 onSubmit을 사용하기 위해 쓴다. ($emit때문에?) -->
    <table>
        <tr>
            <td>제목</td>
            <td>
                <input type="text" v-model="title"/>
            </td>
        </tr>
        <tr>
            <td>작성자</td>
            <td>
                <input type="text" v-model="writer"/>
            </td>
        </tr>
        <tr>
            <td>본문</td>
            <td>
                <textarea cols="50" rows="20" v-model="content"/>
            </td>
        </tr>
    </table>
    <div>
        <button type="submit">등록</button>
        <router-link :to="{ name: 'JpaBoardListPage' }">
            취소
        </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: "JpaBoardRegisterForm",
    data () {
        return {
            title: '제목을 입력하세요.',
            writer: '누구세요?',
            content: '내용을 입력하세요.'
        }
    },
    methods: {
        onSubmit () {
            const { title, writer, content } = this
            this.$emit('submit', { title, writer, content })
        }
    }
}
</script>

<style>

</style>