<template>
  <tr>
   <!-- 
      arr[rowIndex][index] 

      rowData    -> arr[0] ~ arr[4]
      rowData[0] -> arr[0][0] ~ arr[0][4] -> cellData
      ...        ->          ...          -> cellData
      arr[4]     -> arr[4][0] ~ arr[4][4] -> cellData
      TableComponent.vue 에서 받아온 rowData[] 각각의 열 정보 for 문으로 추출
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
   <!-- 
      @updateTurnShape은 v-on:updateTurnShape와 동의어
      updateTurnShape이라는 이벤트가 발생하면 (TdComponent.vue 의 $emit 을 통해 이벤트가 발생했음) *(@이벤트발생 = "실행시킬메서드")
      updateTurnShape 매서드를 동작시키라는 의미
      만약 @updateTurnShape="testFunction" 이라면
      updateTurnShape 이벤트 발생시 testFunction 매서드 동작 
   -->
  </tr>
</template>

<script>

import TdComponent from '@/components/lecture/emitTest/TdComponent.vue'

export default {
   name: "TrComponent",
   components: {
      TdComponent
   },
   props: {
      rowData: Array,
      rowIndex: Number,
      tableData: Array,
      currentTurnShape: String
   },
   methods: {
      updateTurnShape(receivedTurnShape) { // receivedTurnShape(변수명) : 전달된 값(this.game.propsTurnShape)
         console.log('TrComponent received Td Component info: ' + receivedTurnShape)
         this.turnShape = receivedTurnShape
         this.$emit('updateTurnShape', this.turnShape)
      },
      updateWinner(receivedWinner) {
         console.log("Tr Component: winner received")
         this.$emit('updateWinner', receivedWinner)
      },
      updateTableData() {
         this.$emit('updateTableData')
      }
   }
}
</script>

<style>

</style>