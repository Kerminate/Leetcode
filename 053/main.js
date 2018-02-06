/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length
  let maxToCur = nums[0]
  let max = nums[0]
  for (let i = 1; i < len; i++) {
    maxToCur = Math.max(maxToCur + nums[i], nums[i])
    max = Math.max(max, maxToCur)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
