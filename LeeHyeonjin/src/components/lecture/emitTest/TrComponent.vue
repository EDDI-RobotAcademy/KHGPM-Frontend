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
        @updateTableData="updateTableData"
        />
  </tr>
</template>



<script>
import TdComponent from '@/components/lecture/emitTest/TdComponent.vue'

export default {
    name: "TrComponent",
    components: {
        TdComponent
    },
    props :{
        rowData: Array,
        rowIndex: Number,
        tableData: Array,
        currentTurnShape: String,
    },
    methods: {
        updateTurnShape(receiveTurnShape){
            this.turnShape = receiveTurnShape;
            this.$emit('updateTurnShape', this.turnShape)
        },
        updateWinner(receiveWinner){
            console.log("Tr Component : winner received")
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