/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1 || n === 0) return 1
  if (n === 1) return x
  if (n < 0) return 1 / myPow(x, -n)
  let res = 1
  let num = x
  while (n > 1) {
    if (n % 2 === 1) {
      res *= num
      n--
    } else {
      num *= num
      n /= 2
    }
  }
  return res * num
}

// console.log(myPow(2.00000, 10))
// console.log(myPow(34.00515, -3))
console.log(myPow(8.95371, -1))
