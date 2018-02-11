/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let arr = Array.from({length: n}).map(() => Array.from({length: n}, () => 1))
  let start = 0
  let end = n - 1
  let iter = 1
  while (start < end) {
    for (let i = start; i < end; i++) arr[start][i] = iter++
    for (let i = start; i < end; i++) arr[i][end] = iter++
    for (let i = end; i > start; i--) arr[end][i] = iter++
    for (let i = end; i > start; i--) arr[i][start] = iter++
    start++
    end--
  }
  if (start === end) arr[start][start] = iter
  return arr
}

console.log(generateMatrix(4))
