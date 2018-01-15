/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// js用位运算还是一直超时，借鉴了网上一种方法http://huaren-it.com/thread/leetcode%e7%ac%ac29%e9%a2%98-divide-two-integers/

var divide = function (dividend, divisor) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)
  let sign = true
  if (divisor < 0) {
    divisor = -divisor
    sign = false
  }
  if (dividend < 0) {
    dividend = -dividend
    sign = !sign
  }
  if (divisor === 1) {
    if (sign) return dividend <= MAX ? dividend : MAX
    else return dividend <= MAX ? -dividend : MIN
  }
  if (dividend < divisor) return 0
  let res = 0
  substract(divisor, 1)
  return sign ? res : -res

  function substract (dvs, quot) {
    if (dividend > dvs) {
      substract(dvs + dvs, quot + quot)
    }
    if (dividend >= dvs) {
      dividend -= dvs
      res += quot
    }
  }
}

console.log(divide(15, 3))
