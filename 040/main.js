/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (candidates == null || candidates.length === 0) return []
  let len = candidates.length
  candidates.sort((a, b) => {
    return a - b > 0 ? 1 : -1
  })
  let res = []
  let arr = []
  let sum = 0
  dfs(arr, sum, 0)
  return res

  function dfs (arr, sum, num) {
    if (sum === target) {
      let ans = arr.slice(0)
      res.push(ans)
    } else if (num < len) {
      for (let i = num; i < len; i++) {
        if (i > num && candidates[i] === candidates[i - 1]) continue
        if (sum + candidates[i] > target) break
        arr.push(candidates[i])
        sum += candidates[i]
        dfs(arr, sum, i + 1)
        sum -= candidates[i]
        arr.splice(-1, 1)
      }
    }
  }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))
