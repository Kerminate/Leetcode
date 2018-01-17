/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let len = nums.length
  let sign = true
  let sel
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] - nums[i - 1] > 0) {
      sel = i - 1
      sign = false
      break
    }
  }
  if (sign) {
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] > nums[j]) {
          let tmp = nums[j]
          nums[j] = nums[i]
          nums[i] = tmp
        }
      }
    }
  } else {
    for (let i = len - 1; i >= 0; i--) {
      if (nums[i] > nums[sel]) {
        let tmp = nums[sel]
        nums[sel] = nums[i]
        nums[i] = tmp
        break
      }
    }
    for (let i = sel + 1; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (nums[i] > nums[j]) {
          let tmp = nums[j]
          nums[j] = nums[i]
          nums[i] = tmp
        }
      }
    }
  }
  return nums
}

console.log(nextPermutation([1, 3, 5]))
console.log(nextPermutation([1, 1, 5]))
console.log(nextPermutation([3, 2, 1]))
console.log(nextPermutation([1, 3, 2]))
