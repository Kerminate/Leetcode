/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const len = s.length
  let max = 0
  let mid
  let left = -1
  let arr = []
  for (let i = 0; i < len; i++) {
    if (s[i] === '(') {
      arr.push(i)
    } else {
      let total = arr.length
      if (total === 0) {
        left = i
      } else {
        if (s[arr[total - 1]] === '(') {
          arr.splice(total - 1, 1)
          if (total > 1) mid = arr[total - 2]
          else mid = left
          if (max < i - mid) max = i - mid
        } else {
          left = i
        }
      }
    }
  }
  return max
}

console.log(longestValidParentheses(')()())'))
console.log(longestValidParentheses('(()'))
