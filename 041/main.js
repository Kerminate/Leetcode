/**
 * @param {number[]} nums
 * @return {number}
 */

// 解法一，虽然ac了，但不符合题目不改变空间的要求
var firstMissingPositive = function (nums) {
  if (nums.length === 0) return 1
  nums.sort((a, b) => {
    return a - b > 0 ? 1 : -1
  })
  const len = nums.length
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

// 解法二
var firstMissingPositive = function (nums) {
  const len = nums.length
  let i = 0
  while (i < len) {
    if (nums[i] !== i + 1 && nums[i] >= 1 && nums[i] < len && nums[i] !== nums[nums[i] - 1]) {
      swap(i, nums[i] - 1)
    } else {
      i++
    }
  }
  for (i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1
  }
  return len + 1

  function swap (i, j) {
    nums[i] ^= nums[j]
    nums[j] ^= nums[i]
    nums[i] ^= nums[j]
  }
}

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([1, 2, 2, 1, 3, 1, 0, 4, 0]))
