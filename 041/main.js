/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1
  nums.sort((a, b) => {
    return a - b > 0 ? 1 : -1
  })
  let len = nums.length
  let res = -1
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) continue
    if (i === 0 && nums[i] > 1) {
      res = 1
      break
    }
    if (i > 0 && nums[i] !== 1 && nums[i] - nums[i - 1] !== 1 && nums[i] - nums[i - 1] !== 0) {
      if (nums[i - 1] >= 0) res = nums[i - 1] + 1
      else res = 1
      break
    }
  }
  if (res === -1) res = nums[len - 1] + 1
  return res
}

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([1, 2, 2, 1, 3, 1, 0, 4, 0]))
