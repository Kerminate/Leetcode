/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let len = nums.length
  let start = 0
  let end = len - 1
  let res
  if (nums[start] >= target) return 0
  if (nums[end] === target) return end
  if (nums[end] < target) return len
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid
      if (start + 1 === end) break
    } else if (nums[mid] > target) {
      end = mid
    }
  }
  res = start + 1
  return res
}

// console.log(searchInsert([1, 3, 5, 6], 5))
// console.log(searchInsert([1, 3, 5, 6], 2))
// console.log(searchInsert([1, 3, 5, 6], 7))
// console.log(searchInsert([1, 3, 5, 6], 0))
// console.log(searchInsert([1, 3], 3))
console.log(searchInsert([1, 4, 6, 7, 8, 9], 6))
