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

// 오목 게임 만들기
import TableComponent from '@/components/lecture/emitTest/TableComponent.vue'
export default {
    name: "EmitTestBoardGame",
    components: {
        TableComponent
    },
    data () {
        return {
            // tableData[5][5]
            tableData: [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ],
            // 게임 순서
            currentTurnShape: 'O',
            winner:'',
        }
    }, 
    methods: {
        updateTurnShape(receiveTurnShape){
            this.currentTurnShape = receiveTurnShape;
            //this.$emit('updateTurnShape', this.updateTurnShape)
        },
        updateWinner(receiveWinner){
            console.log("Main Board Game : winner received")
            this.winner = receiveWinner
        },
        updateTableData(){
            this.tableData = [
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ]
        }
    }

}
</script>

<style>

</style>