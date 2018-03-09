/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix == null || matrix.length === 0) return false
  const row = matrix.length
  const col = matrix[0].length
  let start = 0
  let end = row - 1
  while (start < end - 1) {
    let mid = Math.floor((start + end) / 2)
    if (matrix[mid][0] === target) return true
    else if (matrix[mid][0] > target) end = mid
    else start = mid
  }
  for (let i = start; i <= end; i++) {
    for (let j = 0; j <= col; j++) {
      if (matrix[i][j] === target) return true
    }
  }
  return false
}

console.log(searchMatrix([
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]))
