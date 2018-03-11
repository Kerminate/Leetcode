/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let arr = []
  let res = []
  dfs(1, arr)
  return res

  function dfs (num, vec) {
    if (vec.length === k) {
      let tmp = vec.slice(0)
      res.push(tmp)
    } else {
      for (let i = num; i <= n; i++) {
        vec.push(i)
        dfs(i + 1, vec)
        vec.splice(-1)
      }
    }
  }
}

console.log(combine(4, 2))
