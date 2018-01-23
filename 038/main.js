/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n <= 0) return ''
  let mid = '1'
  let i = 1
  while (i < n) {
    let str = mid
    let len = str.length
    let count = 0
    let prev = '.'
    mid = ''
    for (let j = 0; j < len; j++) {
      if (prev === '.' || prev === str[j]) {
        count++
      } else {
        mid += (count + '') + prev
        count = 1
      }
      prev = str[j]
    }
    i++
    mid += (count + '') + prev
  }
  return mid
}
console.log(countAndSay(4))
