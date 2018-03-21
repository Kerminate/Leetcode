/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let nums = Array.from({length: n + 1}).map(() => 0)
  nums[0] = 1
  nums[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      nums[i] += nums[j] * nums[i - 1 - j]
    }
  }
  return nums[n]
}

console.log(numTrees(2))
console.log(numTrees(4))
