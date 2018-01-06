/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let res = []
  nums.sort((a, b) => a - b)
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let start = j + 1
      let end = len - 1
      while (start < end) {
        if (nums[i] + nums[j] + nums[start] + nums[end] === target) {
          res.push([nums[i], nums[j], nums[start], nums[end]])
          while (start < end && nums[start] === nums[start + 1]) {
            start++
          }
          while (start < end && nums[end] === nums[end - 1]) {
            end--
          }
          start++
          end--
        } else if (nums[i] + nums[j] + nums[start] + nums[end] < target) {
          while (start < end && nums[start] === nums[start + 1]) {
            start++
          }
          start++
        } else if (nums[i] + nums[j] + nums[start] + nums[end] > target) {
          while (start < end && nums[end] === nums[end - 1]) {
            end--
          }
          end--
        }
      }
    }
  }
  return res
}

console.log(fourSum([-1, 2, 2, -5, 0, -1, 4], 3))
