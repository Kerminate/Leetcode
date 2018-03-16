/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix == null || matrix.length === 0) return 0
  const row = matrix.length
  const col = matrix[0].length
  let i
  let j
  let area = 0
  for (i = 0; i < row; i++) {
    let arr = Array.from({length: col}).map(() => 0)
    let stack = []
    let left
    let right
    let hei
    for (j = 0; j < col; j++) {
      let k = i
      while (k >= 0 && matrix[k][j] == 1) {
        arr[j]++
        k--
      }
    }
    for (j = 0; j <= col; j++) {
      let size = stack.length
      while (size > 0 && (arr[j] < arr[stack[size - 1]] || j === col)) {
        hei = stack.slice(-1)
        right = j
        stack.splice(-1)
        size--
        left = size > 0 ? stack[size - 1] : -1
        area = Math.max(area, arr[hei] * (right - left - 1))
      }
      stack.push(j)
    }
  }
  return area
}

console.log(maximalRectangle([
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0]
]))
console.log(maximalRectangle([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]))
