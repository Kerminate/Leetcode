/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return []
  const row = matrix.length
  const col = matrix[0].length
  const res = []
  let m = row
  let n = col
  let left = 0
  let right = col - 1
  let top = 0
  let bottom = row - 1
  while (m > 1 && n > 1) {
    for (let i = left; i < right; i++) {
      res.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) {
      res.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) {
      res.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) {
      res.push(matrix[i][left])
    }
    left++
    top++
    right--
    bottom--
    m -= 2
    n -= 2
  }
  if (n > 1 && m === 1) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
  } else if (m > 1 && n === 1) {
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
  } else if (m === 1 && n === 1) {
    res.push(matrix[top][left])
  }
  return res
}

console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
console.log(spiralOrder([
  [2, 3]
]))
console.log(spiralOrder([
  [3],
  [2]
]))
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]))
console.log(spiralOrder([
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
]))
