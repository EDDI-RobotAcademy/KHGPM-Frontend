<template>
    <v-container>
      <div>{{ currentTurnShape }} 님의 턴입니다.</div>
      <table-component 
          :table-data="tableData"
          :current-turn-shape="currentTurnShape"
          @updateTurnShape="updateTurnShape"
          @updateWinner="updateWinner"
          @updateTableData="updateTableData"/>
      <div v-if="winner">{{ winner }} 님의 승리!</div>
    </v-container>
  </template>
  
  <script>
  
  import axios from 'axios'
  import TableComponent from '@/components/lecture/emitTest/TableComponent.vue'
  
  // 오목 게임
  // 바둑판, 승자 판정 그 다음 아직 모르겠음.
  // 누구 차례인지 어떻게 알지 ?
  // 'O', 'X' 표시로 순서를 구분하자!12
  
  export default {
      name: "EmitTestBoardGame",
      components: {
          TableComponent
      },
      data () {
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
      methods: {
        updateTurnShape (passingValue) {
            console.log('SimpleBoardGameView received TableComponent info: ' + passingValue)
            this.currentTurnShape = passingValue
        },
          updateWinner (receivedWinner) {
            console.log("Main Board Game: winner received")
            this.winner = receivedWinner
            const winnerdata = {winner : this.winner}
           

            axios.post('http://localhost:7777/vue/Emit/receive-test', winnerdata)
            .then(() => {
                alert('데이터 전송 완료!')
            })
            .catch(() => {
                alert('문제 발생!')
            })
          },
          updateTableData () {
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