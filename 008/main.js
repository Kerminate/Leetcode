/**
 * @param {string} str
 * @return {number}
 */
// 解法一
// var myAtoi = function (str) {
//   const MAX = Math.pow(2, 31) - 1
//   const MIN = -Math.pow(2, 31)
//   let res = parseInt(str) || 0
//   if (res < MIN) {
//     return MIN
//   } else if (res > MAX) {
//     return MAX
//   } else {
//     return res
//   }
// }

// 解法二
var myAtoi = function (str) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)
  const len = str.length
  let i = 0
  while (i < len && str[i] === ' ') i++
  let flag = true
  if (str[i] === '+') i++
  else if (str[i] === '-') {
    flag = false
    i++
  }
  let ans = ''
  while (i < len && str[i] !== ' ') ans += str[i++]
  let res = 0
  let j, mid
  for (j = 0; j < ans.length; j++) {
    mid = ans[j] - '0'
    if (mid >= 0 && mid <= 9) res = res * 10 + mid
    else break
  }
  if (!flag) res = -res
  if (res > MAX) return MAX
  if (res < MIN) return MIN
  return res
}

console.log(myAtoi('0'))
console.log(myAtoi('2147483648'))
console.log(myAtoi('+-2'))
console.log(myAtoi('  -0012a42'))
