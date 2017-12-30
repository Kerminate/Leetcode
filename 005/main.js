/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 1
  let sub = s[0]
  let len = s.length
  for (let i = 0; i < len; i++) {
    let j = 1
    while ((i - j) >= 0 && (i + j) < len && s[i - j] === s[i + j]) {
      j++
    }
    if (max < 2 * j - 1) {
      max = 2 * j - 1
      sub = s.substr(i - j + 1, max)
    }
    j = 0
    while ((i - j) >= 0 && (i + j + 1) < len && s[i - j] === s[i + j + 1]) {
      j++
    }
    if (max < 2 * j) {
      max = 2 * j
      sub = s.substr(i - j + 1, max)
    }
  }
  return sub
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
