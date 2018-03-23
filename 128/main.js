/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums == null || nums.length === 0) return 0
  let set = new Set(nums)
  let arr = Array.from(set)
  arr.sort((a, b) => a - b > 0 ? 1 : -1)
  let len = arr.length
  let res = 1
  let tmp = 1
  for (let i = 1; i < len; i++) {
    if (arr[i] - arr[i - 1] === 1) {
      tmp++
      res = Math.max(res, tmp)
    } else tmp = 1
  }
  return res
}

// console.log(longestConsecutive([1, 2, 0, 1]))
console.log(longestConsecutive([9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7]))
