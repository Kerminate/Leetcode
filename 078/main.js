/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const len = nums.length
  let arr = []
  let res = []
  dfs(0, arr)
  return res

  function dfs (num, vec) {
    let tmp = vec.slice(0)
    res.push(tmp)
    for (let i = num; i < len; i++) {
      vec.push(nums[i])
      dfs(i + 1, vec)
      vec.splice(-1)
    }
  }
}

console.log(subsets([1, 2, 3]))
