/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let com = ''
  if (strs == null || strs.length === 0 || strs[0] === '') return com
  for (let i = 0; i < strs[0].length; i++) {
    let ss = strs[0][i]
    let temp = 0
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== ss) {
        temp = 1
        break
      }
    }
    if (temp === 1) break
    com += ss
  }
  return com
}

// console.log(longestCommonPrefix(['ser', 'srs', 'sfew']))
// console.log(longestCommonPrefix(['', 'srs', 'sfew']))
console.log(longestCommonPrefix(['ab', 'abc', 'abb']))
