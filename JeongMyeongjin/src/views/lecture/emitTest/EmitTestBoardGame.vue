<template>
    <v-container>
        <div class="turn">{{ currentTurnShape }} 님의 턴입니다.</div>
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
import TableComponent from '@/components/lecture/emitTest/TableComponent.vue';
// 오목 게임
// 바둑판, 승자 판정
// 누구 차례인지
// 'O', 'X' 표시로 순서 구분

export default {
    name: "EmitTestBoardGame",
    components: {
        TableComponent
    },
    data() {
        return {
            currentTurnShape: '⦁',
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
            console.log('Board Game received Table Component info: ' + passingValue)
            this.currentTurnShape = passingValue;
        },
        updateWinner (receivedWinner) {
            console.log("Main Board Game: winner received")
            this.winner = receivedWinner

            this.respWinner(receivedWinner )
        }, 
        updateTableData() {
            this.tableData = [
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
            ]
        },
        respWinner(receivedWinner) {
            axios.post('http://localhost:7777/vue/first/receive-test2',
            { receivedWinner  }
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

</style>