/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let str = new RegExp(p)
  let res = str.exec(s)
  if (res === null || res.length === 0) return false
  return s === res[0]
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('aab', 'c*a*b'))
