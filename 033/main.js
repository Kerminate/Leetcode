/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 解法一
// var search = function (nums, target) {
//   return nums.indexOf(target)
// }

// 解法二
var search = function (nums, target) {
  if (nums == null || nums.length === 0) return -1
  let start = 0
  let end = nums.length - 1
  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2)
    if (nums[start] <= nums[mid]) {
      if (nums[mid] >= target && nums[start] <= target) end = mid
      else start = mid
    } else if (nums[mid] < nums[end]) {
      if (nums[mid] <= target && nums[end] >= target) start = mid
      else end = mid
    }
  }
  if (nums[start] === target) return start
  if (nums[end] === target) return end
  return -1
}
