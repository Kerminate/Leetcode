/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) return x
  let str = x + ''
  let flag = false
  let rev = []
  let doc
  if (x < 0) {
    flag = true
    let mid = str.split('')
    mid.splice(0, 1)
    rev = mid.reverse()
  } else {
    flag = false
    rev = str.split('').reverse()
  }
  while (rev[0] === '0') {
    rev.splice(0, 1)
  }
  let res = rev.join('')
  if (flag) {
    doc = parseInt('-' + res)
    if (doc + Math.pow(2, 31) < 0) {
      return 0
    }
    return doc
  } else {
    doc = parseInt(res)
    if (doc > Math.pow(2, 31) - 1) {
      return 0
    } else {
      return doc
    }
  }
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
