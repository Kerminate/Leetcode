/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let len = nums.length
  let end = len - 1
  let start = 0
  let arr = -1
  if (nums[start] === target) arr = target
  if (nums[end] === target) arr = end
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      arr = mid
      break
    } else if (nums[mid] < target) {
      start = mid
      start++
    } else if (nums[mid] > target) {
      end = mid
      mid--
    }
  }
  if (arr === -1) return [-1, -1]
  let head = arr
  let tail = arr
  for (let i = arr - 1; i >= 0; i--) {
    if (nums[i] === target) {
      head = i
    } else {
      break
    }
  }
  for (let i = arr + 1; i < len; i++) {
    if (nums[i] === target) {
      tail = i
    } else {
      break
    }
  }
  return [head, tail]
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([1], 1))
