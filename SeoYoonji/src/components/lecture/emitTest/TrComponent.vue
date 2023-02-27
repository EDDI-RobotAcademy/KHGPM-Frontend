<template>
  <tr>
    <!-- arr[rowIndex][index] 
        rowData -> arr[0] ~ arr[4]
        rowData[0] -> arr[0][0] ~ arr[4][4] -> cellData
                   ...
        rowData[4] -> arr[4][0] ~ arr[4][4] -> cellData
    --> 
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
        <!-- @updateTurnShape는 v-on:updateTurnShape와 동의어
            updateTurnShape이라는 이벤트가 발생하면
            updateTurnShape 메서드를 동작시키라는 의미
            만약 @updateTurnShpae="testFunction" 이라면
            updateTurnShape 이벤트 발생시 testFunction 메서드 동작-->
  </tr>
</template>

<script>
import TdComponent from '@/components/lecture/emitTest/TdComponent.vue';

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
        //위 @updateTurnShape 로 이 메서드 동작 (TdComponent에서 전달된 턴 값이 매개변수로 사용)
        updateTurnShape (receivedTurnShape) {
            console.log('Tr Component received Td Component info: ' + receivedTurnShape)

            this.turnShape = receivedTurnShape
            this.$emit('updateTurnShape', this.turnShape)
            //다시 또 상위로 턴 값 전달
        },
        updateWinner (receivedWinner) {
            console.log("Tr Component: winner received")
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData () {
            this.$emit('updateTableData')
        }
    }
}
</script>

<style>

</style>