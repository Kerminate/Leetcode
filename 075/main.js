/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const len = nums.length
  let p1 = 0
  let p2 = len - 1
  let i = 0
  while (i <= p2) {
    if (nums[i] === 0) {
      nums[i] = nums[p1]
      nums[p1++] = 0
    } else if (nums[i] === 2) {
      swap(i, p2)
    }
    i++
  }
  return nums

  function swap (a, b) {
    let tmp = nums[a]
    nums[a] = nums[b]
    nums[b] = tmp
    p2 = b - 1
    if (nums[a] === 2 && a < p2 + 1) {
      swap(a, p2)
    } else if (nums[a] === 0 && a >= p1) {
      nums[a] = nums[p1]
      nums[p1++] = 0
    }
  }
}

// console.log(sortColors([1, 0, 0, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 2, 0, 1]))
// console.log(sortColors([2, 2]))
console.log(sortColors([2, 2, 0, 0, 2, 0, 2, 1, 0]))
