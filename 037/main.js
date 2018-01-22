/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// 递归
var solveSudoku = function (board) {
  if (board == null || board.length !== 9 || board[0].length !== 9) return false
  solve(0, 0)

  function solve (row, col) {
    while (row < 9 && col < 9) {
      if (board[row][col] === '.') break
      if (col === 8) {
        col = 0
        row++
      } else col++
    }
    if (row >= 9) return true
    let newRow = row + Math.floor(col / 8)
    let newCol = (col + 1) % 9
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num)) {
        board[row][col] = num + ''
        const res = solve(newRow, newCol)
        if (res) return true
        board[row][col] = '.'
      }
    }
    return false
  }

  function isValid (row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num + '' || board[i][col] === num + '') return false
    }
    let rowCell = Math.floor(row / 3) * 3
    let colCell = Math.floor(col / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[rowCell + i][colCell + j] === num + '') return false
      }
    }
    return true
  }
  return board
}

console.log(solveSudoku([[".",".","9","7","4","8",".",".","."],["7",".",".",".",".",".",".",".","."],[".","2",".","1",".","9",".",".","."],[".",".","7",".",".",".","2","4","."],[".","6","4",".","1",".","5","9","."],[".","9","8",".",".",".","3",".","."],[".",".",".","8",".","3",".","2","."],[".",".",".",".",".",".",".",".","6"],[".",".",".","2","7","5","9",".","."]]))
