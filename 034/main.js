/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let len = nums.length
  let end = len - 1
  let start = 0
  let head = -1
  let tail = -1
  if (nums[start] === target) head = start
  if (nums[end] === target) tail = end
  if (head !== -1 && tail !== -1) return [head, tail]
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      if (nums[mid] !== nums[mid - 1]) {
        head = mid
        break
      } else {
        end = mid
        mid--
      }
    } else if (nums[mid] < target) {
      start = mid
      start++
    } else if (nums[mid] > target) {
      end = mid
      end--
    }
  }
  if (nums[start] === target) head = start
  if (head === -1) return [-1, -1]
  start = 0
  end = len - 1
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2)
    if (nums[mid] === target) {
      if (nums[mid] !== nums[mid + 1]) {
        tail = mid
        break
      } else {
        start = mid
        start++
      }
    } else if (nums[mid] < target) {
      start = mid
      start++
    } else if (nums[mid] > target) {
      end = mid
      end--
    }
  }
  if (nums[end] === target) tail = end
  return [head, tail]
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// console.log(searchRange([1], 1))
// console.log(searchRange([3, 3, 3], 3))
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3))
