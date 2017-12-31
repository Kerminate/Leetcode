/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)
  let res = parseInt(str) || 0
  if (res < MIN) {
    return MIN
  } else if (res > MAX) {
    return MAX
  } else {
    return res
  }
}

console.log(myAtoi('0'))
console.log(myAtoi('2147483648'))
