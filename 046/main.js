/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums == null || nums.length === 0) return []
  let res = []
  const len = nums.length
  let s = new Set()
  let arr = []
  dfs(s, arr)
  return res

  function dfs (s, arr) {
    if (s.size === len) {
      let cp = arr.slice()
      res.push(cp)
    } else {
      for (let i = 0; i < len; i++) {
        if (s.has(nums[i])) continue
        s.add(nums[i])
        arr.push(nums[i])
        dfs(s, arr)
        s.delete(nums[i])
        arr.splice(-1)
      }
    }
  }
}

console.log(permute([1, 2, 3]))
