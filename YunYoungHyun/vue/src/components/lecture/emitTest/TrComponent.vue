<template>
  <tr style="border-width: 2px; border-style: solid;">
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
            updateTurnShape이라는 이벤트가 발생하면
            updateTurnShape 메서드를 동작시키라는 의미
            만약 @updateTurnShape="testFunction" 이라면
            updateTurnShape 이벤트 발생시 testFunction 메서드 동작
          -->
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
      updateTurnShape (receivedTurnShape) {
          // console.log('[Turn]TrComponent received TdComponent info: ' + receivedTurnShape)
          console.log('[Turn]Td -> Tr: '+ receivedTurnShape)
          this.$emit('updateTurnShape', receivedTurnShape)
      },
      updateWinner(receivedWinner) {
          // console.log('[Win]TrComponent received TdComponent info: ' + receivedWinner)
          console.log('[Win]Td -> Tr: '+ receivedWinner)
          this.$emit('updateWinner', receivedWinner)
      },
      updateTableData() {
          this.$emit('updateTableData')
      }
  }
}
</script>