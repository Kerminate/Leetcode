/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length
  let min = prices[0]
  let res = 0
  for (let i = 1; i < len; i++) {
    let tmp = prices[i] - min
    if (tmp > 0) res = Math.max(res, tmp)
    min = Math.min(min, prices[i])
  }
  return res
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
