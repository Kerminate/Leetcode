/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let rs = 0
  let cs = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!matrix[i][j]) {
        if (!i && !j) {
          rs = 1
          cs = 1
        } else if (!i) {
          rs = 1
        } else if (!j) {
          cs = 1
        } else {
          matrix[i][0] = 0
          matrix[0][j] = 0
        }
      }
    }
  }
  for (let i = 1; i < col; i++) {
    if (!matrix[0][i]) {
      for (let j = 1; j < row; j++) matrix[j][i] = 0
    }
  }
  for (let i = 1; i < row; i++) {
    if (!matrix[i][0]) {
      for (let j = 1; j < col; j++) matrix[i][j] = 0
    }
  }
  if (rs) {
    for (let i = 0; i < col; i++) matrix[0][i] = 0
  }
  if (cs) {
    for (let i = 0; i < row; i++) matrix[i][0] = 0
  }
  return matrix
}

// console.log(setZeroes([[2, 0, 1], [0, 1, 3], [2, 3, 4]]))
console.log(setZeroes([[0, 0, 0, 5], [4, 3, 1, 4], [0, 1, 1, 4], [1, 2, 1, 3], [0, 0, 1, 1]]))
