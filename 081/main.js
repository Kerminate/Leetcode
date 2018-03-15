/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  for (let val of nums) {
    if (val === target) return true
  }
  return false
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 2))
