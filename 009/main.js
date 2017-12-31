/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x + ''
  const len = str.length
  let flag = true
  if (len % 2 === 0) {
    for (let i = 0; i < len / 2; i++) {
      if (str[len / 2 - i - 1] !== str[len / 2 + i]) {
        flag = false
        break
      }
    }
  } else {
    for (let i = 1; i < len / 2; i++) {
      if (str[(len - 1) / 2 - i] !== str[(len - 1) / 2 + i]) {
        flag = false
        break
      }
    }
  }
  return flag
}

console.log(isPalindrome(1221))
console.log(isPalindrome(1231))
console.log(isPalindrome(121))
console.log(isPalindrome(-2147483648))
