/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  let len = bottom - top
  while (top < bottom && left < right) {
    for (let i = 0; i < len; i++) {
      let temp = matrix[top][left + i]
      matrix[top][left + i] = matrix[bottom - i][left]
      matrix[bottom - i][left] = matrix[bottom][right - i]
      matrix[bottom][right - i] = matrix[top + i][right]
      matrix[top + i][right] = temp
    }
    top++
    left++
    bottom--
    right--
    len -= 2
  }
}

console.log(rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
