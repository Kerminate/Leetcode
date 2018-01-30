/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const len = nums.length
  if (len < 2) return 0
  let curMax = 0
  let nextMax = 0
  let step = 0
  let index = 0
  while (index <= curMax) {
    while (index <= curMax) {
      nextMax = Math.max(nextMax, nums[index] + index)
      index++
    }
    step++
    curMax = nextMax
    if (curMax >= len - 1) return step
  }
  return 0
}

console.log(jump([2, 3, 1, 1, 4]))
