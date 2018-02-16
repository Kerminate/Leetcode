/**
 * @param {string} s
 * @return {boolean}
 */

// 解法一
// var isNumber = function (s) {
//   const str = s.trim()
//   if (!str.length) return false
//   const num = +str
//   return !isNaN(num)
// }

// 解法二
var isNumber = function (s) {
  if (s == null || s.length === 0) return false
  const len = s.length
  let i = 0
  while (i < len && s[i] === ' ') i++
  let flag = false
  if (i < len && (s[i] === '+' || s[i] === '-')) i++
  while (i < len && (s[i] >= '0' && s[i] <= '9')) {
    flag = true
    i++
  }
  if (i < len && s[i] === '.') {
    i++
    while (i < len && (s[i] >= '0' && s[i] <= '9')) {
      flag = true
      i++
    }
  }
  if (i < len && s[i] === 'e' && flag) {
    flag = false
    i++
    if (i < len && (s[i] === '+' || s[i] === '-')) i++
    while (i < len && (s[i] >= '0' && s[i] <= '9')) {
      flag = true
      i++
    }
  }
  while (i < len && s[i] === ' ') i++
  return flag && i === len
}

console.log(isNumber('2e9 '))
console.log(isNumber('.-4'))
console.log(isNumber(' 005047e+6'))
