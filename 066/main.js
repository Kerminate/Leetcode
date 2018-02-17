/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const len = digits.length
  let flag = true
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] === 9 && flag) {
      digits[i] = 0
    } else if (flag) {
      digits[i]++
      flag = false
    } else {
      flag = false
      break
    }
  }
  if (flag) digits.unshift(1)
  return digits
}

console.log(plusOne([9, 9, 9]))
console.log(plusOne([0]))
