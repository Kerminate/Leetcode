/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = []
  const dfs = function (str, num, len, nag) {
    if (len === 2 * n) {
      res.push(str)
    } else {
      if (num > 0) {
        if (nag < n) {
          dfs(str + '(', num + 1, len + 1, nag + 1)
          dfs(str + ')', num - 1, len + 1, nag)
        } else {
          dfs(str + ')', num - 1, len + 1, nag)
        }
      } else {
        dfs(str + '(', num + 1, len + 1, nag + 1)
      }
    }
  }
  dfs('', 0, 0, 0)
  return res
}

console.log(generateParenthesis(3))
