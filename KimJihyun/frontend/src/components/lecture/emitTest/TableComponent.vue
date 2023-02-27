<!-- tableData -> arr[4][4]
     rowData   -> arr[0] ~ arr[4]
     arr[0]    -> arr[0][0] ~ arr[0][4]
      ...      ->          ...
     arr[4]    -> arr[4][0] ~ arr[4][4]
     index     -> 0 ~ 4           -->
<template>
<table>
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
import TrComponent from './TrComponent.vue';
export default {
    name: "TableComponent",
    data () {
        return {
        }
    },
    components: {
        TrComponent
    },
    props: {
        tableData: Array,
        currentTurnShape: String,
    },
    methods: {
        updateTurnShape (passingValue) {
            console.log('TableComponent received TrComponent info: ' + passingValue)
            this.turnShape = passingValue
            this.$emit('updateTurnShape', this.turnShape)
        },
        updateWinner (receivedWinner){
            console.log("Table Conponent : winner received")
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData(){
            this.$emit('updateTableData')
        }
    }
}
</script>