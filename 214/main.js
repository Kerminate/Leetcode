/**
 * @param {string} s
 * @return {string}
 */
// KMP算法
var shortestPalindrome = function (s) {
  let rev = s.split('').reverse().join('')
  let str = s + rev
  const len = str.length
  let next = Array.from({length: len}).map(() => 0)
  buildNext(str)
  if (next[len] > s.length) next[len] = (next[len] - s.length) * 2
  let pre = s.substring(next[len]).split('').reverse().join('')
  let res = pre + s
  return res

  function buildNext (p) {
    const pLen = p.length
    next[0] = -1
    let k = -1
    let j = 0
    while (j < pLen) {
      if (k === -1 || p[j] === p[k]) {
        k++
        j++
        next[j] = k
      } else {
        k = next[k]
      }
    }
  }
}

console.log(shortestPalindrome('aacecaaa'))
console.log(shortestPalindrome('abcd'))
console.log(shortestPalindrome('aaaabbaa'))
