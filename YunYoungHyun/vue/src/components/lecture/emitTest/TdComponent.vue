<template>
    <td @click="whichOneSelected" 
        style="width: 30px; height: 30px; text-align: center; border-width: 2px; border-style: solid;">
      {{ cellData }}
    </td>
  </template>
  
<script>
  export default {
      name: "TdComponent",
      data() {
        return {
            game: {
                propsTurnShape: this.currentTurnShape,
                propsWinner: ''
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
            console.log('현재 Turn: '+ this.currentTurnShape)

            let isDuplicated = this.setDataToSelectedArray()
            let win = this.winnerCheck()

            if(win) {
                this.game.propsWinner = this.currentTurnShape
                this.$emit('updateWinner', this.game.propsWinner)
                this.$emit('updateTableData')
            } else {
                if(this.game.propsWinner !== 'O' || this.game.propsWinner !== 'X') {
                    this.game.propsWinner = ''
                    this.$emit('updateWinner', this.game.propsWinner)
                }
                
                let allCellFull = true

                // Javascript ECMAScript6( ES6 - 이크마6 ) -> React, vue 에서 도입한 문법!
                // tableData[x][y]
                // tableDate[x] === row
                // tableData[fixed_x][y] === cell   => [fixed_x] 라고 적은 이유는 y 가 반복 될 동안 x는 고정되기 때문
                this.tableData.forEach(row => {
                        row.forEach(cell => {
                            if(!cell) {
                          allCellFull = false;
                        }
                    })
                })

                if(allCellFull) { this.$emit('updateTableData') }
            }

            if(!isDuplicated) { this.changeTurn() }
          },
          changeTurn () {
              this.game.propsTurnShape = this.currentTurnShape === 'O' ? 'X' : 'O'
              // this.$emit('이벤트명', 값(옵션))
              this.$emit('updateTurnShape', this.game.propsTurnShape)
          },
          setDataToSelectedArray () {
              if(this.tableData[this.rowIndex][this.cellIndex] === '') {
                  this.$set(this.tableData[this.rowIndex], this.cellIndex, this.currentTurnShape)
                  return false
              } else {
                  alert("여긴 이미 뒀어~")
                  return true
              }
          },
          winnerCheck() {
            if(
                this.tableData[this.rowIndex][0] === this.currentTurnShape &&
                this.tableData[this.rowIndex][1] === this.currentTurnShape &&
                this.tableData[this.rowIndex][2] === this.currentTurnShape &&
                this.tableData[this.rowIndex][3] === this.currentTurnShape &&
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
      }
  }
</script>