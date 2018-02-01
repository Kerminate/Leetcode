/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums == null || nums.length === 0) return []
  nums.sort((a, b) => a - b)
  let res = []
  let s = new Set()
  let arr = []
  dfs(arr, s)
  return res

  function dfs (arr, s) {
    if (arr.length === nums.length) {
      let mid = arr.slice()
      res.push(mid)
    } else {
      let pre = nums[0] - 1
      for (let i = 0; i < nums.length; i++) {
        if (pre !== nums[i] && !s.has(i)) {
          pre = nums[i]
          s.add(i)
          arr.push(nums[i])
          dfs(arr, s)
          s.delete(i)
          arr.splice(-1)
        }
      }
    }
  }
}

console.log(permuteUnique([2, 2, 1, 1]))
