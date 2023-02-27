<template>
  <v-container>
   <div>{{ currentTurnShape }} 님의 턴입니다.</div>
   <table-component border="1" style="text-align: center;"
      :table-data="tableData"
      :current-turn-shape="currentTurnShape"
      @updateTurnShape="updateTurnShape"
      @updateWinner="updateWinner"
      @updateTableData="updateTableData"/>
      <div v-if="winner">{{ winner }} 님의 승리</div>
  </v-container>
</template>

<script>
import axios from 'axios'
import TableComponent from "@/components/lecture/emitTest/TableComponent.vue"

// 오목 게임
// 바둑판, 승자 판정, 그 다음 아직 모르겠음.
// 누구 차례인지 어떻게 알지 ? 
// 'O', 'X' 표시로 순서를 구분하자!

export default {
   name: "EmitTestBoardGame",
   components: {
      TableComponent // local 커스텀 태그 지정 (table-component)
   },
   data() { // 자체적으로 가지고 있는 객체 혹은 함수의 형태로 vue 인스턴스가 사용할 정보 (지역변수)
      return {
         currentTurnShape: 'O',
         // tableData[5][5]
         tableData: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
         ],
         winner: '',
      }
   },
   methods: { // vue 인스턴스가 사용할 함수
      updateTurnShape(receivedTurnShape) {
         console.log('Board Game received Component info: ' + receivedTurnShape)
         this.currentTurnShape = receivedTurnShape // methods 에서 data() 에 있는 변수에 접근하고 싶을 때 this 사용
      },
      updateWinner(receivedWinner) {
         console.log("Main Board: winner received")
         this.winner = receivedWinner
         
         // const { winner } = receivedWinner
         axios.post('http://localhost:7777/vue/first/receive-test', 
            { winner: this.winner }  
         )
         .then(() => {
            alert('데이터 전송 완료!')
         })
         .catch(() => {
            alert('문제 발생!')
         })
      },
      updateTableData() {
         this.tableData = [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
         ]
      }
   }
}
</script>

<style>

</style>