/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let tarr = Array.from({length: 256}).map(() => 0)
  let sarr = Array.from({length: 256}).map(() => 0)
  let sum = t.length
  let len = s.length
  let count = 0
  let res = ''
  let reslen = 0
  for (let i = 0; i < sum; i++) {
    tarr[t.charCodeAt(i)]++
  }
  let left = 0
  while (tarr[s.charCodeAt(left)] === 0) left++
  let right = left
  while (right <= len) {
    if (tarr[s.charCodeAt(right)] !== 0) {
      sarr[s.charCodeAt(right)]++
      if (sarr[s.charCodeAt(right)] <= tarr[s.charCodeAt(right)]) count++
    }
    while (count === sum) {
      if (!res || reslen > right - left + 1) {
        res = s.substring(left, right + 1)
        reslen = right - left + 1
      }
      if (sarr[s.charCodeAt(left)] > 0) sarr[s.charCodeAt(left)]--
      if (sarr[s.charCodeAt(left)] < tarr[s.charCodeAt(left)]) count--
      left++
    }
    right++
  }
  return res
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
