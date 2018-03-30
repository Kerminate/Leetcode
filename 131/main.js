/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const len = s.length
  let res = []
  dfs([], 0)
  return res

  function dfs (arr, index) {
    if (index === len) {
      res.push(arr.slice(0))
    } else {
      for (let i = index; i < len; i++) {
        if (isParlindrome(index, i)) {
          arr.push(s.substring(index, i + 1))
          dfs(arr, i + 1)
          arr.pop()
        }
      }
    }
  }

  function isParlindrome (i, j) {
    while (i < j) {
      if (s[i++] !== s[j--]) return false
    }
    return true
  }
}

console.log(partition('aab'))
