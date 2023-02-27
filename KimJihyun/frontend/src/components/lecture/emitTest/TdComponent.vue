<template>
<td @click="whichOneSelected" style="width: 30px; height: 30px">
    {{ cellData }}
</td>
</template>

<script>
export default {
    name: "TdComponent",
    data () {
        return {
            game: {
                propsTurnShape: this.currentTurnShape,
                propsWinner:'',
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
        console.log('오목판을 클릭했습니다!')
        
        // 중복 클릭 방지
        let isDuplicate = this.setDataToSelectedArray ()
        
        //승자 만들기
        let win = this.winnerCheck()
        

        if(win) {
            this.game.propsWinner = this.currentTurnShape

            this.$emit('updateWinner', this.game.propsWinner)
            this.$emit('updateTableData')
        } else{// 꽉 찬 경우에만 테이블 갱신(무승부일경우에도 갱신)
            let allCellFull = true

            // 빈 열과 행이 있는 지 순회
            // tableData[x][y]
            // tableData[x] === row
            // tableData[fixed.x]][y] === cell
            this.tableData.forEach(row => {
                row.forEach(cell => {
                    if(!cell){
                        allCellFull = false
                    }
                })
            })
            if (allCellFull) {this.$emit('updateTableData')}
        }

        // 중복 클릭 방지
        if (!isDuplicate) {this.changeTurn()}

    },

    changeTurn () {
        this.game.propsTurnShape = this.currentTurnShape === 'O' ? 'X' : 'O'
        // this.$emit('이벤트명', 값(옵션))
        this.$emit('updateTurnShape', this.game.propsTurnShape)
    },

    setDataToSelectedArray () {
        // this.tableData[this.rowIndex] : 사용자가 클릭한 행 정보
        // this.cellIndex: 사용자가 클릭한 '행'내 열 정보
        // this.currentTurnShape: 현재 턴('x', 'o')
        // this.$set(행, 열, 값) -> 특정[행][열] = 값
        if (this.tableData[this.rowIndex][this.cellIndex] !== '') {return true}
        
        this.$set(this.tableData[this.rowIndex], this.cellIndex, this.currentTurnShape)
        return false
    },
    winnerCheck () {
        if ( // 빙고처럼 가로  
            this.tableData[this.rowIndex][0] === this.currentTurnShape &&
            this.tableData[this.rowIndex][1] === this.currentTurnShape &&
            this.tableData[this.rowIndex][2] === this.currentTurnShape &&
            this.tableData[this.rowIndex][3] === this.currentTurnShape &&
            this.tableData[this.rowIndex][4] === this.currentTurnShape 
        ) {
            return true
        } else if ( // 세로 빙고
            this.tableData[this.cellIndex][0] === this.currentTurnShape &&
            this.tableData[this.cellIndex][1] === this.currentTurnShape &&
            this.tableData[this.cellIndex][2] === this.currentTurnShape &&
            this.tableData[this.cellIndex][3] === this.currentTurnShape &&
            this.tableData[this.cellIndex][4] === this.currentTurnShape 

        ) {
            return true

        } else if ( //대각선 빙고
            this.tableData[0][0] === this.currentTurnShape &&
            this.tableData[1][1] === this.currentTurnShape &&
            this.tableData[2][2] === this.currentTurnShape &&
            this.tableData[3][3] === this.currentTurnShape &&
            this.tableData[4][4] === this.currentTurnShape 

        ) {
            return true

        } else if ( // 반대 대각선 빙고
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