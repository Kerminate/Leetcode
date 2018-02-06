/**
 * @param {number} n
 * @return {string[][]}
 */
var totalNQueens = function (n) {
  const col = Array.from({ length: n }).map(() => 0)
  const diag1 = Array.from({ length: 2 * n - 1 }).map(() => 0)
  const diag2 = Array.from({ length: 2 * n - 1 }).map(() => 0)
  const board = Array.from({ length: n }).map(() => Array.from({ length: n }, () => '.'))
  let res = 0
  dfs(0)
  return res

  function dfs (y) {
    if (y === n) {
      res++
      return
    }
    for (let i = 0; i < n; i++) {
      if (col[i] || diag1[i + y] || diag2[i - y + n - 1]) continue
      col[i] = 1
      diag1[i + y] = 1
      diag2[i - y + n - 1] = 1
      board[y][i] = 'Q'
      dfs(y + 1)
      col[i] = 0
      diag1[i + y] = 0
      diag2[i - y + n - 1] = 0
      board[y][i] = '.'
    }
  }
}

console.log(totalNQueens(8))
// solveNQueens(8)
