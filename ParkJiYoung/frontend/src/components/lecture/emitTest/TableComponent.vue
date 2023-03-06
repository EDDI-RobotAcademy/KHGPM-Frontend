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