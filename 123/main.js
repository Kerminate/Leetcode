/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices == null || prices.length === 0) return 0
  let len = prices.length
  let local = Array.from({ length: len }).map(() => Array.from({ length: 3 }, () => 0))
  let global = Array.from({ length: len }).map(() => Array.from({ length: 3 }, () => 0))
  for (let i = 1; i < len; i++) {
    for (let j = 1; j <= 2; j++) {
      let dif = prices[i] - prices[i - 1]
      local[i][j] = Math.max(global[i - 1][j - 1] + Math.max(dif, 0), local[i - 1][j] + dif)
      global[i][j] = Math.max(global[i - 1][j], local[i][j])
    }
  }
  return global[len - 1][2]
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
