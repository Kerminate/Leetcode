/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1.length === 0 || num2.length === 0) return '0'
  const len1 = num1.length
  const len2 = num2.length
  const res = Array.from({length: len1 + len2}).map(() => 0)
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let mid = parseInt(num1[i]) * parseInt(num2[j])
      let high = i + j + 1
      let low = i + j
      mid += res[high]
      res[high] = mid % 10
      res[low] += Math.floor(mid / 10)
    }
  }
  let str = ''
  for (let i = 0; i < res.length; i++) {
    if (str.length === 0 && res[i] === 0) continue
    str += res[i]
  }
  if (str.length === 0) str = '0'
  return str
}

// console.log(multiply('12', '2'))
console.log(multiply('123', '456'))
