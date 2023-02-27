<template>
  <td @click="whichOneSelected" style="width: 30px; height: 30px">
    {{  cellData }}
  </td>
</template>

<script>

export default {
    name: "TdComponent",
    data () {
        return {
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
    methods: {
        whichOneSelected () {
            console.log("오목판을 클릭했습니다")

            let isDuplicated = this.setDataToSelectedArray()
            let win = this.winnerCheck()

            if (win) {
                this.game.propsWinner = this.currentTurnShape

                this.$emit('updateWinner', this.game.propsWinner) //승자판정 이벤트
                this.$emit('updateTableData') //판 엎기 이벤트
            } else { //판이 모두 찼는데 무승부인 경우 판엎기 이벤트 실행
                let allCellFull = true
                //모든 셀이 차있는지 확인하는 forEach
                this.tableData.forEach(row => {
                    row.forEach(cell => {
                        if (!cell) {  //데이터타입 상관없이 ! 로 존재 여부 확인(불린)
                            allCellFull = false
                        }
                    })
                })

                if (allCellFull) { this.$emit('updateTableData') }
            }
            
            if (!isDuplicated) {
                this.changeTurn()
            }
        },
        changeTurn () {
            //현재 턴이 'O'라면 'X'를 'updateTurnShape'라는 이벤트 값으로 저장해서 상위로 보냄
            this.game.propsTurnShape = this.currentTurnShape === 'O' ? 'X' : 'O'
            this.$emit('updateTurnShape', this.game.propsTurnShape) 
            //emit 은 하위에서 상위로 보냄
            //this.$emit('이벤트명', 값(옵션이라 없어도 됨))
        },
        setDataToSelectedArray () {
            // this.tableData[this.rowIndex] : 사용자가 클릭한 행 정보
            // this.cellIndex : 사용자가 클릭한 행내 열 정보
            // this.currentTurnShape : 현재 턴('O','X')
            // this.$set(행, 열, 값) -> 특정[행][열] = 값
            
            //다시 클릭했을 때 턴 모양 안바뀌게
            if (this.tableData[this.rowIndex][this.cellIndex] !== '') { return true } 
            

            this.$set(this.tableData[this.rowIndex], this.cellIndex, this.currentTurnShape)
            return false
        },
        winnerCheck () {
            if ( //가로
                this.tableData[this.rowIndex][0] === this.currentTurnShape &&
                this.tableData[this.rowIndex][1] === this.currentTurnShape &&
                this.tableData[this.rowIndex][2] === this.currentTurnShape &&
                this.tableData[this.rowIndex][3] === this.currentTurnShape &&
                this.tableData[this.rowIndex][4] === this.currentTurnShape 
            ) {
                return true
            } else if ( //세로
                this.tableData[0][this.cellIndex] === this.currentTurnShape &&
                this.tableData[1][this.cellIndex] === this.currentTurnShape &&
                this.tableData[2][this.cellIndex] === this.currentTurnShape &&
                this.tableData[3][this.cellIndex] === this.currentTurnShape &&
                this.tableData[4][this.cellIndex] === this.currentTurnShape 
            ) {
                return true
            } else if ( //대각선
                this.tableData[0][0] === this.currentTurnShape &&
                this.tableData[1][1] === this.currentTurnShape &&
                this.tableData[2][2] === this.currentTurnShape &&
                this.tableData[3][3] === this.currentTurnShape &&
                this.tableData[4][4] === this.currentTurnShape
            ) {
                return true
            } else if ( //반대 대각선
                this.tableData[0][4] === this.currentTurnShape &&
                this.tableData[1][3] === this.currentTurnShape &&
                this.tableData[2][2] === this.currentTurnShape &&
                this.tableData[3][1] === this.currentTurnShape &&
                this.tableData[4][0] === this.currentTurnShape
            ) {
                return true
            }
            return false
        }
    }
}
</script>

<style>

</style>