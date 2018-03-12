/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length
  let col = board[0].length
  let len = word.length
  let flag = Array.from({length: row}).map(() => Array.from({length: col}, () => 0))
  let k = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === word[k]) {
        flag[i][j] = 1
        let status = recur(i, j, k + 1, flag)
        if (status) return true
        else flag[i][j] = 0
      }
    }
  }
  return false

  function recur (i, j, k, flag) {
    if (k === len) return true
    if (i > 0 && !flag[i - 1][j] && board[i - 1][j] === word[k]) {
      flag[i - 1][j] = 1
      let res = recur(i - 1, j, k + 1, flag)
      if (res) return true
      else flag[i - 1][j] = 0
    }
    if (j > 0 && !flag[i][j - 1] && board[i][j - 1] === word[k]) {
      flag[i][j - 1] = 1
      let res = recur(i, j - 1, k + 1, flag)
      if (res) return true
      else flag[i][j - 1] = 0
    }
    if (i + 1 < row && !flag[i + 1][j] && board[i + 1][j] === word[k]) {
      flag[i + 1][j] = 1
      let res = recur(i + 1, j, k + 1, flag)
      if (res) return true
      else flag[i + 1][j] = 0
    }
    if (j + 1 < col && !flag[i][j + 1] && board[i][j + 1] === word[k]) {
      flag[i][j + 1] = 1
      let res = recur(i, j + 1, k + 1, flag)
      if (res) return true
      else flag[i][j + 1] = 0
    }
    return false
  }
}

// console.log(exist([
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E']
// ], 'ABCB'))
console.log(exist([
  ['C', 'A', 'A'],
  ['A', 'A', 'A'],
  ['B', 'C', 'D']
], 'AAB'))
