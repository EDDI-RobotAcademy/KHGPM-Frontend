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
        updateTurnShape (receivedTurnShape) {
            // console.log('[Turn]TableComponent received TrComponent info: ' + receivedTurnShape)
            console.log('[Turn]Tr -> Table: '+ receivedTurnShape)
            this.$emit('updateTurnShape', receivedTurnShape)
        },
        updateWinner(receivedWinner) {
            // console.log('[Win]TableComponent received TrComponent info: ' + receivedWinner)
            console.log('[Win]Tr -> Table: '+ receivedWinner)
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData() {
            this.$emit('updateTableData')
        }
    }
}
</script>