<template>
  <table>
    <!--
        tableData -> arr[4][4]
        rowData -> arr[0] ~ arr[4]
        arr[0] -> arr[0][0] ~ arr[4][4]
                   ...
        arr[4] -> arr[4][0] ~ arr[4][4]
        index -> 0 ~ 4
    -->
    <!--v-for 구문에선 key값이 필수. 중복 안되는 값을 설정해준다.-->
    <tr-component 
        v-for="(rowData, index) in tableData" :key="index"
        :row-data="rowData"
        :row-index="index"
        :table-data="tableData"
        :current-turn-shape="currentTurnShape"
        @updateTurnShape="updateTurnShape"
        @updateWinner="updateWinner"
        @updateTableData="updateTableData"/>
  </table>
</template>

<script>
import TrComponent from '@/components/lecture/emitTest/TrComponent.vue'

export default {
    name: "TableComponent",
    components: {
        TrComponent
    },
    props: {
        tableData: Array,
        currentTurnShape: String,
    },
    methods: {
        // TrComponent에서 전달된 턴 값이 매개변수로 사용
        updateTurnShape (receivedTurnShape) {
            console.log('Table Component received Tr Component info: ' + receivedTurnShape)

            this.turnShape = receivedTurnShape;
            this.$emit('updateTurnShape', this.turnShape)
            //다시 또 상위로 전달. view의 EmitTestBoardGame.vue로 전달된다.
        },
        updateWinner (receivedWinner) {
            console.log("Table Component: winner received")
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