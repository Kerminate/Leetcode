/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const row = dungeon.length
  const col = dungeon[0].length
  let point = Array.from({ length: row + 1 }).map(() => Array.from({ length: col + 1 }, () => Number.MAX_VALUE))
  point[row][col - 1] = point[row - 1][col] = 1
  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      point[i][j] = Math.max(1, Math.min(point[i + 1][j], point[i][j + 1]) - dungeon[i][j])
    }
  }
  return point[0][0]
}

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]))
console.log(calculateMinimumHP([[1, -3, 3], [0, -2, 0], [-3, -3, -3]]))
