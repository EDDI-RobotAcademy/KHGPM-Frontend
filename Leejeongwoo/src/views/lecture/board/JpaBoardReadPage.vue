<template>
  <v-container>
    <div align="center">
      <h2>Vue + Spring 게시판 읽기</h2>
      <p><mark>작성한 게시글을 읽을 수 있으며 삭제 할 수 있는 페이지 입니다. <br>수정페이지로 이동 할 수 있습니다.</mark></p>
      <jpa-board-read :board="board"/>
      <!-- <jpa-board-read v-if="board" :board="board"/> -->
      <!-- <p v-else>로딩중 .......... </p> -->
      <router-link :to="{ name: 'JpaBoardModifyPage', params: { boardId } }">
        <v-btn color="blue">수정</v-btn>
      </router-link>
      <v-btn color="red" @click="onDelete">삭제</v-btn>
      <router-link :to="{ name: 'JpaBoardListPage' }">
        <v-btn color="blue">돌아가기</v-btn>
      </router-link>
    </div>
  </v-container>
</template>

<script>

import JpaBoardRead from '@/components/lecture/board/JpaBoardRead.vue'
import { mapActions, mapState } from 'vuex'

export default {
  components: { JpaBoardRead },
    name: "JpaBoardReadPage",

    // 반드시 필요하다는 의미로 required: true가 설정되어 있습니다. 
    // 이 설정으로 인해, boardId 프로퍼티가 전달되지 않았을 경우 Vue.js에서 에러를 발생시킵니다.
    props: {
        boardId: {
            type: String,
        }
    },
    // computed 속성은 템플릿에서 변수처럼 사용되며, 값이 변경될 때마다 자동으로 다시 계산됩니다. 만약 board 상태 값이 변경되면, 해당 컴포넌트의 computed 속성에서도 변경된 값을 사용하여 자동으로 계산됩니다.
    computed: {
        ...mapState([
          'board'
        ])
    },
    methods: {
        ...mapActions([
            'requestBoardToSpring',
            'requestDeleteBoardToSpring'
        ]),
        async onDelete () {
            await this.requestDeleteBoardToSpring(this.boardId)
            await this.$router.push({ name: 'JpaBoardListPage' })
        }
    },
// Vue.js에서 created 라이프사이클 훅은 컴포넌트가 생성되자마자 실행되는 메서드입니다.

// 위 코드에서 created 훅 내부에서는 requestBoardToSpring 메서드를 호출하고 있고 이 메서드는 인자로 this.boardId 값을 받아 백엔드 서버에 해당 게시물의 정보를 요청하는 역할을 할 것입니다.

// 즉, created 훅에서 requestBoardToSpring 메서드를 호출하면, 해당 컴포넌트가 생성되고 나서 boardId 값을 이용하여 백엔드 서버로부터 해당 게시물의 정보를 받아와 컴포넌트 내부 상태 데이터에 저장하도록 구현할 수 있습니다.
    created () {
        console.log('boardId: ' + this.boardId)
        this.requestBoardToSpring(this.boardId)
    }
}

</script>

<style scoped>
a {
  text-decoration: none;
}

</style>