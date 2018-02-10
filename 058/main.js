/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (s == null || s.length === 0) return 0
  let count = 0
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '' && count === 0) continue
    if (s[i] === ' ' && count !== 0) {
      break
    }
    if (s[i] !== ' ') count++
  }
  return count
}

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('a '))
