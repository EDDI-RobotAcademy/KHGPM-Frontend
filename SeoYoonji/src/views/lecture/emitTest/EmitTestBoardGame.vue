<template>
  <v-container>
    <div>{{ currentTurnShape }}님의 턴입니다.</div>
    <table-component
        :table-data="tableData"
        :current-turn-shape="currentTurnShape"
        @updateTurnShape="updateTurnShape"
        @updateWinner="updateWinner"
        @updateTableData="updateTableData"/>
    <div v-if="winner">{{ winner }}님의 승리!</div>
  </v-container>
</template>

<script>
 
import axios from 'axios';
import TableComponent from '@/components/lecture/emitTest/TableComponent.vue';

export default {
    name: "EmitTestBoardGame",
    components: {
        TableComponent
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
        updateTurnShape (receivedTurnShape) {
            this.currentTurnShape = receivedTurnShape
        },
        updateWinner (receivedWinner) {
            this.winner = receivedWinner
            console.log(this.winner)
            axios.post('http://localhost:7777/vue/first/emit-receive-test', { winner: this.winner })
            .then(() => {
                alert('전송 완료')
            })
            .catch(() => {
                alert('문제 발생')
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