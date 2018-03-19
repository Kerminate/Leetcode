/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  let len1 = s1.length
  let len2 = s2.length
  let len3 = s3.length
  if (len1 + len2 !== len3) return false
  let res = Array.from({length: len2 + 1}).map(() => Array.from({length: len1 + 1}, () => true))
  for (let i = 1; i <= len1; i++) {
    if (s1[i - 1] === s3[i - 1]) res[0][i] = res[0][i - 1]
    else res[0][i] = false
  }
  for (let i = 1; i <= len2; i++) {
    if (s2[i - 1] === s3[i - 1]) res[i][0] = res[i - 1][0]
    else res[i][0] = false
  }
  for (let i = 1; i <= len2; i++) {
    for (let j = 1; j <= len1; j++) {
      if (res[i - 1][j] && s3[i + j - 1] === s2[i - 1]) res[i][j] = true
      else if (res[i][j - 1] && s3[i + j - 1] === s1[j - 1]) res[i][j] = true
      else res[i][j] = false
    }
  }
  return res[len2][len1]
}

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
console.log(isInterleave('', '', 'a'))
