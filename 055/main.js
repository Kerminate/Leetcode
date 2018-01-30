/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length
  if (len < 2) return true
  let reach = 0
  for (let i = 0; i < len && i <= reach; i++) {
    reach = Math.max(nums[i] + i, reach)
    if (reach >= len - 1) return true
  }
  return false
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
