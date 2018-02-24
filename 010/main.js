/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 解法一
// var isMatch = function (s, p) {
//   let str = new RegExp(p)
//   let res = str.exec(s)
//   if (res === null || res.length === 0) return false
//   return s === res[0]
// }

// 解法二
var isMatch = function (s, p) {
  const slen = s.length
  const plen = p.length
  let match = Array.from({length: slen + 1}).map(() => Array.from({length: plen + 1}, () => false))
  match[0][0] = true
  for (let i = 1; i <= slen; i++) match[i][0] = false
  for (let i = 1; i <= plen; i++) {
    if (p[i - 1] === '*') match[0][i] = match[0][i - 2]
  }
  for (let i = 1; i <= slen; i++) {
    for (let j = 1; j <= plen; j++) {
      if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) match[i][j] = match[i - 1][j - 1]
      else if (p[j - 1] === '*') {
        if (p[j - 2] === s[i - 1] || p[j - 2] === '.') match[i][j] = match[i][j - 2] || match[i - 1][j]
        else match[i][j] = match[i][j - 2]
      }
    }
  }
  return match[slen][plen]
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b'))
