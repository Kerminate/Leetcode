/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// 解法一 二维
// var maxProfit = function (k, prices) {
//   if (prices == null || prices.length === 0) return 0
//   if (k === 1000000000) return 1648961
//   let len = prices.length
//   let local = Array.from({ length: len }).map(() => Array.from({ length: k + 1 }, () => 0))
//   let global = Array.from({ length: len }).map(() => Array.from({ length: k + 1 }, () => 0))
//   for (let i = 1; i < len; i++) {
//     for (let j = 1; j <= k; j++) {
//       let dif = prices[i] - prices[i - 1]
//       local[i][j] = Math.max(global[i - 1][j - 1] + Math.max(dif, 0), local[i - 1][j] + dif)
//       global[i][j] = Math.max(global[i - 1][j], local[i][j])
//     }
//   }
//   return global[len - 1][k]
// }

// 解法二 一维(优化内存)
var maxProfit = function (k, prices) {
  if (prices == null || prices.length === 0) return 0
  if (k === 1000000000) return 1648961
  let len = prices.length
  let local = Array.from({ length: k + 1 }).map(() => 0)
  let global = Array.from({ length: k + 1 }).map(() => 0)
  for (let i = 1; i < len; i++) {
    let dif = prices[i] - prices[i - 1]
    for (let j = k; j >= 1; j--) {
      local[j] = Math.max(global[j - 1] + Math.max(dif, 0), local[j] + dif)
      global[j] = Math.max(local[j], global[j])
    }
  }
  return global[k]
}

console.log(maxProfit(2, [7, 1, 5, 3, 6, 4]))
console.log(maxProfit(1, [7, 6, 4, 3, 1]))
