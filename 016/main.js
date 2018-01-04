/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length
  if (len === 3) {
    return nums.reduce((total, num) => {
      return total + num
    }, 0)
  }
  nums.sort((a, b) => {
    return a > b ? 1 : -1
  })
  let res = nums[0] + nums[1] + nums[2]
  let min = Math.abs(res - target)
  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let start = i + 1
    let end = len - 1
    let sum
    while (start < end) {
      sum = nums[i] + nums[start] + nums[end]
      if (Math.abs(sum - target) <= min) {
        min = Math.abs(sum - target)
        res = sum
        if (sum < target) start++
        else end--
      } else if (Math.abs(sum - target) > min && sum > res) {
        end--
      } else if (Math.abs(sum - target) > min && sum < res) {
        start++
      }
    }
  }
  return res
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))
