<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <router-link :to="{ name: 'JpaBoardRegisterPage' }">
        게시물 작성
    </router-link>
    <jpa-board-list :boards="boards"/>
  </v-container>
</template>


<script>
import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: { JpaBoardList },
    name: "JpaBoardListPage",
    //computed : 반응형 데이터를 효과적으로 처리하기 위해 사용(데이터 변화를 감지하고 처리)
    //vue인스턴스의 데이터 속성에 의존하는 데이터를 계산하고 캐싱하여 계산된 값이 변경될 때만 다시 계산
    computed: { 
      ...mapState([
        'boards'
      ]),
    },
    //mounted : 인스턴스가 마운트된 후 호출. (라이프사이클 훅 이해하기)
    mounted () {
      this.requestBoardListToSpring()
    },
    methods: {
      ...mapActions([
        'requestBoardListToSpring'
      ])
    }
}
</script>

<style>

</style>
