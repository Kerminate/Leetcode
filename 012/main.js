/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let firstDigit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  let secondDigit = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  let thirdDigit = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  let fourthDigit = ['', 'M', 'MM', 'MMM']
  let arr = Array.from({length: 4})
  let i4 = Math.floor(num / 1000)
  if (i4 > 0) arr[0] = fourthDigit[i4]
  num = num % 1000
  let i3 = Math.floor(num / 100)
  if (i3 > 0) arr[1] = thirdDigit[i3]
  num = num % 100
  let i2 = Math.floor(num / 10)
  if (i2 > 0) arr[2] = secondDigit[i2]
  let i1 = num % 10
  if (i1 > 0) arr[3] = firstDigit[i1]
  return arr.join('')
}

console.log(intToRoman(45))
console.log(intToRoman(3999))
