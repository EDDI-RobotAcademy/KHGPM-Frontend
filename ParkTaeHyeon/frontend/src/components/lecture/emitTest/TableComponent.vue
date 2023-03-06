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
            <!-- v-for="작명 in 3" : key="작명" 

                    v-for 안에는 변수 2개까지 작명이 가능하다.
                    v-for"(작명1, i) in something : key="i"
                    i를 출력해보면 0, 1, 2 .. 순차적으로 반복 되어 지는 것

                    즉 v-for="(행 데이터, 행 인덱스)" in tableData :key="index"-->
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
    // components 사용자 태그를 사용하기 위한 정의
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
        updateWinner(receivedWinner) {
            console.log('Table Component: winner received')
            this.$emit('updateWinner', receivedWinner)
        },
        updateTableData() {
            this.$emit('updateTableData')
        }
    }
}
</script>