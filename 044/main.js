/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s == null || p == null) return false
  let match = Array.from({length: s.length + 1}).map(() => false)
  for (let i = 0; i < s.length + 1; i++) {
    match[i] = Array.from({length: p.length + 1}).map(() => false)
  }
  match[0][0] = true
  for (let i = 1; i <= p.length; i++) {
    if (p[i - 1] === '*') {
      match[0][i] = match[0][i - 1]
    }
  }
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '?') {
        match[i][j] = match[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        match[i][j] = match[i - 1][j] || match[i][j - 1]
      }
    }
  }
  return match[s.length][p.length]
}

console.log(isMatch('abc', 'ab*'))
console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', '*'))
