<template>
   <table>
      <!-- 
         tableData -> arr[4][4]
         rowData   -> arr[0] ~ arr[4]
         arr[0]    -> arr[0][0] ~ arr[0][4]
         ...       -> ... 
         arr[4]    -> arr[4][0] ~ arr[4][4]
         index     -> 0 ~ 4
         for문으로 tableData[][] 의 행 정보 for 문으로 추출
      -->
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

import TrComponent from "@/components/lecture/emitTest/TrComponent.vue"

export default {
   name: "TableComponent",
   components: {
      TrComponent
   },
   props: { // 전달되는 지역변수 
      tableData: Array,
      currentTurnShape: String
   },
   methods: {
      updateTurnShape(receivedTurnShape) {
         console.log('TableComponent received TrComponent info: ' + receivedTurnShape)
         this.turnShape = receivedTurnShape
         this.$emit('updateTurnShape', this.turnShape)
      },
      updateWinner(receivedWinner) {
         console.log("Table Component: winner received")
         this.$emit('updateWinner', receivedWinner)
      },
      updateTableData() {
         this.$emit('updateTableData')
      }
   },
   
   
}
</script>

<style>

</style>