/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  const matrix = Array.from({length: row}).map(() => Array.from({length: col}, () => 0))
  for (let i = 0; i < row; i++) {
    if (obstacleGrid[i][0] === 1) break
    matrix[i][0] = 1
  }
  for (let i = 0; i < col; i++) {
    if (obstacleGrid[0][i] === 1) break
    matrix[0][i] = 1
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (!obstacleGrid[i][j]) matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
      else matrix[i][j] = 0
    }
  }
  return matrix[row - 1][col - 1]
}

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))

console.log(uniquePathsWithObstacles([
  [0, 0, 0]
]))

console.log(uniquePathsWithObstacles([[1, 0]]))
