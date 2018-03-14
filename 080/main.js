/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  if (len < 2) return len
  let ind = 2
  for (let i = 2; i < len; i++) {
    if (!(nums[ind - 2] === nums[ind - 1] && nums[ind - 1] === nums[i])) {
      nums[ind++] = nums[i]
    }
  }
  return ind
}

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))
console.log(removeDuplicates([1, 1]))
