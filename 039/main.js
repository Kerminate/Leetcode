/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (candidates == null || candidates.length === 0) return []
  let len = candidates.length
  candidates.sort((a, b) => { return a - b > 0 ? 1 : -1 })
  let res = []
  let mid = []
  dfs(mid, 0, 0)
  return res

  function dfs (arr, num, sum) {
    if (sum === target) {
      let ans = arr.slice(0)
      res.push(ans)
    } else if (sum < target) {
      for (let i = num; i < len; i++) {
        if (sum + candidates[i] > target) break
        arr.push(candidates[i])
        sum += candidates[i]
        dfs(arr, i, sum)
        arr.splice(-1, 1)
        sum -= candidates[i]
      }
    }
  }
}

console.log(combinationSum([2, 3, 6, 7], 7))
// console.log(combinationSum([48,22,49,24,26,47,33,40,37,39,31,46,36,43,45,34,28,20,29,25,41,32,23], 69))
