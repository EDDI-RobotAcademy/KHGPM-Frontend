<template>
    <v-container>
      <div>{{ currentTurnShape }} 님의 턴입니다.</div>
      
      <table-component 
          :table-data="tableData"
          :current-turn-shape="currentTurnShape"
          :winnerShape="winner"
          @updateTurnShape="updateTurnShape"
          @updateWinner="updateWinner"
          @updateTableData="updateTableData"
          
          />
      <div v-if="winner">
        {{ winner }} 님의 승리! <br>
        <axios-form @submit="onSubmit"/>       
      </div>     
    </v-container>
  </template>
  
  <script>
import axios from 'axios'
import AxiosForm from '@/components/homework/axios/AxiosForm.vue'
import TableComponent from '@/components/homework/boardGame/TableComponenet.vue'
export default {
    name: "BoardGame",
    components: {
        TableComponent,
        AxiosForm,
    },
    data () {
        return {
            currentTurnShape: 'O',

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
        updateWinner (receivedWinner ) {
            console.log("Main Board Game: winner received")
            this.winner = receivedWinner
        },
        updateTableData () {
            this.tableData = [
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
            ]
        },
        onSubmit (payload) {
          const { inputName } = payload
          axios.post('http://localhost:7777/vue/connect/receive-name', 
              { inputName }
          )
          .then(() => {
              alert('데이터 전송 완료!')
          })
          .catch(() => {
              alert('문제 발생!')
          })
  
      }
    }
}

</script>

<style>
