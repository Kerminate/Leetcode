/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  if (s1 == null || s2 == null || s1.length !== s2.length) return false
  if (s1.length === 1 && s1 === s2) return true
  let str1 = s1.split('')
  let str2 = s2.split('')
  str1.sort()
  str2.sort()
  let t1 = str1.join('')
  let t2 = str2.join('')
  if (t1 !== t2) return false
  for (let i = 1; i < s1.length; i++) {
    if (isScramble(s1.substr(0, i), s2.substr(0, i)) && isScramble(s1.substr(i), s2.substr(i))) return true
    if (isScramble(s1.substr(0, i), s2.substr(s2.length - i)) && isScramble(s1.substr(i), s2.substr(0, s2.length - i))) return true
  }
  return false
}

console.log(isScramble('great', 'rgtae'))
console.log(isScramble('abc', 'bca'))
