<template>
  <td @click="whichOneSelected" style="width:30px; height:30px">
    {{ cellData }}
  </td>
</template>

<script>
export default {

    
    name: "TdComponent",
    data() {
        return{
            game: {
                propsTurnShape: this.currentTurnShape,
                propsWinner: '',
            }

        }
    },
    props: {
        cellData: String,
        cellIndex: Number,
        rowIndex: Number,
        tableData: Array,
        currentTurnShape: String,
    },
    methods:{
        whichOneSelected(){
            console.log("오목판을 클릭했습니다.")

            let isDuplicate = this.setDataToSelectedArray()
            let win = this.winnerCheck()
            if(win){
                this.game.propsWinner = this.currentTurnShape

                this.$emit('updateWinner', this.game.propsWinner)
            }else{
                let allCellFull = true
                // 모든 셀이 꽉차있는지 확인 (=무승부)
                // for-each : 받을 수 있는 첫번째 데이터를 반복문 돌림= row
                // !cell = String O,x 가 없다면 - 자바스크립트 레크마6?문법
                this.tableData.forEach(row => {
                    row.forEach(cell => {
                        if(!cell){
                            allCellFull = false
                        }
                    })
                })
                // 이긴 상태면 판 엎기?
                if(allCellFull){this.$emit('updateTableData')}
                
            }
            if(!isDuplicate){
                this.changeTurn()
            }
        },
        setDataToSelectedArray(){
            // 이미 누른 상태면 변경 불가
            if(this.tableData[this.rowIndex][this.cellIndex] != ''){return true}
            this.$set(this.tableData[this.rowIndex], this.cellIndex, this.currentTurnShape)
            return false
            
        },
        changeTurn (){
            this.game.propsTurnShape = this.currentTurnShape === 'O' ? 'X' : 'O'
            this.$emit('updateTurnShape', this.game.propsTurnShape) 
        },
        winnerCheck(){
            // 가로 한줄이 같으면 win
            if (
                this.tableData[this.rowIndex][0] === this.currentTurnShape &&
                this.tableData[this.rowIndex][1] === this.currentTurnShape &&
                this.tableData[this.rowIndex][2] === this.currentTurnShape &&
                this.tableData[this.rowIndex][3] === this.currentTurnShape &&
                this.tableData[this.rowIndex][4] === this.currentTurnShape
            ) {
                return true
            // 세로 한줄이 같으면 win
            } else if(
                this.tableData[0][this.cellIndex] === this.currentTurnShape &&
                this.tableData[1][this.cellIndex] === this.currentTurnShape &&
                this.tableData[2][this.cellIndex] === this.currentTurnShape &&
                this.tableData[3][this.cellIndex] === this.currentTurnShape &&
                this.tableData[4][this.cellIndex] === this.currentTurnShape
            ){
                return ture
            // 대각선 한줄이 같으면 win
            }else if(
                this.tableData[0][0] === this.currentTurnShape &&
                this.tableData[1][1] === this.currentTurnShape &&
                this.tableData[2][2] === this.currentTurnShape &&
                this.tableData[3][3] === this.currentTurnShape &&
                this.tableData[4][4] === this.currentTurnShape
            ){
                return true
            // 역방향 대각선 한줄이 같으면 win
            }else if(
                this.tableData[0][4] === this.currentTurnShape &&
                this.tableData[1][3] === this.currentTurnShape &&
                this.tableData[2][2] === this.currentTurnShape &&
                this.tableData[3][1] === this.currentTurnShape &&
                this.tableData[4][0] === this.currentTurnShape
            ){
                return true
            }
            return false
        }
    }
}
</script>

<style>

</style>