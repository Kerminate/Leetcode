/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var res = []
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i)
        res.push(j)
        return res
      }
    }
  }
}

var nums = [2, 7, 11, 15]
var target = 9
console.log(twoSum(nums, target))
