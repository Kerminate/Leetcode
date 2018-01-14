/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}

console.log(removeElement([3, 2, 2, 3], 3))
