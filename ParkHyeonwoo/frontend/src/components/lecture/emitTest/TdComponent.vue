<template>
  <td @click="whichOneSelected" style="width: 30px; height: 30px"> {{ cellData }} </td>
</template>

<script>
export default {
  name: "TdComponent",
  data() {
    return {
      game: { // 객체를 game 이라는 Object에 저장, 사용할 때는 this.game.변수명
        propsTurnShape: this.currentTurnShape,
        propsWinner: '',
      },
    };
  },
  props: { 
    cellData: String,
    cellIndex: Number,
    rowIndex: Number,
    tableData: Array,
    currentTurnShape: String,
  },
  methods: {
    whichOneSelected() {
      console.log("오목판 클릭")

      let isDuplicated = this.setDataToSelectedArray()
      let win = this.winnerCheck()

      if(win) {
        this.game.propsWinner = this.currentTurnShape

        this.$emit('updateWinner', this.game.propsWinner)
        this.$emit('updateTableData')
      } else {
        let allCellFull = true

        // tableData[x][y]
        // tableData[x] === row
        // tableData[fixed_x][y] === cell
        this.tableData.forEach(row => {
          row.forEach(cell => {
            if(!cell) {
              allCellFull = false
            }
          })
        })
        if(allCellFull) { this.$emit('updateTableData') }
      } 
      if(!isDuplicated) {
        this.changeTurn()
      }
    },
    setDataToSelectedArray() {
      // this.tableData[this.rowIndex]: 사용자가 클릭한 행 정보
      // this.cellIndex: 사용자가 클릭한 행 내 열 정보
      // this.currentTurnShape: 현재 턴('X', 'O')
      // this.$set(행, 열, 값) -> 특정[행][열] = 값
      if(this.tableData[this.rowIndex][this.cellIndex] !== '') {return true}
      this.$set(this.tableData[this.rowIndex], this.cellIndex, this.currentTurnShape) // 값이 갱신되었다(선언된 값 업데이트)
      return false
    },
    changeTurn() {
      this.game.propsTurnShape = this.currentTurnShape === "O" ? "X" : "O"
      // this.$emit('이벤트명', 값(옵션))
      this.$emit("updateTurnShape", this.game.propsTurnShape); // updateTurnShape 이벤트 발생(this.game.propsTurnShape 값 전달)
    },
    winnerCheck() {
      if(
        this.tableData[this.rowIndex][1] === this.currentTurnShape &&
        this.tableData[this.rowIndex][2] === this.currentTurnShape &&
        this.tableData[this.rowIndex][3] === this.currentTurnShape &&
        this.tableData[this.rowIndex][0] === this.currentTurnShape && 
        this.tableData[this.rowIndex][4] === this.currentTurnShape
      ) {
        return true
      } else if(
        this.tableData[0][this.cellIndex] === this.currentTurnShape && 
        this.tableData[1][this.cellIndex] === this.currentTurnShape &&
        this.tableData[2][this.cellIndex] === this.currentTurnShape &&
        this.tableData[3][this.cellIndex] === this.currentTurnShape &&
        this.tableData[4][this.cellIndex] === this.currentTurnShape
      ) {
        return true
      } else if(
        this.tableData[0][0] === this.currentTurnShape &&
        this.tableData[1][1] === this.currentTurnShape &&
        this.tableData[2][2] === this.currentTurnShape &&
        this.tableData[3][3] === this.currentTurnShape &&
        this.tableData[4][4] === this.currentTurnShape 
      ) {
        return true
      } else if(
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
  },
};
</script>

<style>
</style>