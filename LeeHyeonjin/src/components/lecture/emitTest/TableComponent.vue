<template>
  <table>
    <!-- 
        tableData -> arr[4][4],
        rowData   -> arr[0] ~ arr[4],
        rowData[0] -> arr[0] ~ arr[4] -> cellData(배열 원소=td)
        ...
        arr[4]    -> ...               -> cellData(배열 원소=td?)
        index     -> 0~4

        테이블이 2차 배열일 때
        v-for="(row단일배열, row배열의 0~length-1) in 테이블" :key="row배열의 순서"
     -->
    <tr-component
        v-for="(rowData, index) in tableData" :key="index"
        :row-data="rowData"
        :row-index="index"
        :tableData="tableData"
        :current-turn-shape="currentTurnShape"
        @updateTurnShape="updateTurnShape"
        @updateWinner="updateWinner"
        />
    <!-- key : 겹치지 않는 값 -> arr[0][0~4]  -->
  </table>
</template>

<script>
import TrComponent from '@/components/lecture/emitTest/TrComponent.vue'
export default {
    name: "TableComponent",
    components:{
        TrComponent
    },
    // emit view에서 전달되는 배열값
    props: {
        tableData: Array,
        currentTurnShape: String
    },
    methods: {
        updateTurnShape(receiveTurnShape){
            this.turnShape = receiveTurnShape;
            this.$emit('updateTurnShape', this.turnShape)
        },
        updateWinner(receiveWinner){
            console.log("Table Component : winner received")
            this.$emit('updateWinner', receiveWinner)
        },
        updateTableData(){
            this.$emit('updateTableData')
        }
    }

}
</script>

<style>

</style>