/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let len = prices.length
  let arr = Array.from({length: len}).map(() => 0)
  let res = 0
  for (let i = 1; i < len; i++) {
    arr[i] = prices[i] - prices[i - 1]
    if (arr[i] > 0) res += arr[i]
  }
  return res
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
