<template>
  <v-container>
    <h2>Vue + Spring + JPA Boards</h2>
    <router-link :to="{ name: 'JpaBoardRegisterPage' }"> <!-- link는 router의 이동하고자 하는 대상 name과 매핑 -->
      게시물 작성
    </router-link>
    <jpa-board-list :boards="boards" />
  </v-container>
</template>

<script>
import JpaBoardList from '@/components/lecture/board/JpaBoardList.vue'
import { mapActions, mapState } from 'vuex' 
// vuex -> 앱 내에 하나의 저장소(store) 를 놓고 모든 컴포넌트가 그 값에 접근할 수 있게끔 한다.

export default {
   components: { JpaBoardList }, // jpa-board-list 태그
   name: "JpaBoardListPage",
   computed: {
      ...mapState([ // store의 states에 있는 데이터를 쉽게 꺼내서 사용할 수 있다.
         'boards'
      ]),
   },
   mounted() { 
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