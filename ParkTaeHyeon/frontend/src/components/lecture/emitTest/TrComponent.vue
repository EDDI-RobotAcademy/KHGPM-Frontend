<template>
    <tr>
        <td-component
            v-for="(cellData, index) in rowData" :key="index"
            :cell-data="cellData"
            :cell-index="index"
            :row-index="rowIndex"
            :table-data="tableData"
            :current-turn-shape="currentTurnShape"
            @updateTurnShape="updateTurnShape"
            @updateWinner="updateWinner"
            @updateTableData="updateTableData"/>
            <!-- @updateTurnShape은 v-on:updateTurnShape의 동의어 
                    updateTurnShape이라는 이벤트가 발생하면
                    updateTurnShape 메서드를 동작시키라는 의미
                    만약 @updateTurnShape="testFunction" 이라면
                    updateTurnShape 이벤트 발생시 testFunction 메서드 동작-->
    </tr>
</template>

<script>
import TdComponent from './TdComponent.vue';
export default {
    name: "TrComponent",
    components: {
        TdComponent
    },
    props: {
        rowData: Array,
        rowIndex: Number,
        tableData: Array,
        currentTurnShape: String,
    },
    methods: {
        updateTurnShape (passingValue) {
            console.log('TrComponent received TdComponent info: ' + passingValue)
            this.turnShape = passingValue
            this.$emit('updateTurnShape', this.turnShape)
        },
        updateWinner(receivedWinner) {
            console.log('Tr Component: winner received')
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData() {
            this.$emit('updateTableData')
        }
    }
}
</script>