/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let len = nums.length
  for (let i = len - 1; i > 0; i--) {
    if (nums.indexOf(nums[i]) !== i) {
      nums.splice(i, 1)
    }
  }
  return nums.length
}

console.log(removeDuplicates([1, 1, 2]))
