/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums == null || nums.length < 3) return []
  nums.sort((a, b) => {
    return a > b ? 1 : -1
  })
  let len = nums.length
  let res = []
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let target = -nums[i]
    let start = i + 1
    let end = len - 1
    while (start < end) {
      let sum = nums[start] + nums[end]
      if (target === sum) {
        res.push([nums[start], nums[end], -sum])
        while (start < end && nums[start] === nums[start + 1]) {
          start++
        }
        while (start < end && nums[end] === nums[end - 1]) {
          end--
        }
        start++
        end--
      } else if (target > sum) {
        while (start < end && nums[start] === nums[start + 1]) {
          start++
        }
        start++
      } else if (target < sum) {
        while (start < end && nums[end] === nums[end - 1]) {
          end--
        }
        end--
      }
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0, 0, 0, 1]))
// console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))
console.log(threeSum([6, -5, -6, -1, -2, 8, -1, 4, -10, -8, -10, -2, -4, -1, -8, -2, 8, 9, -5, -2, -8, -9, -3, -5]))
