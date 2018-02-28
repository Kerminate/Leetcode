/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (word1 == null && word2 == null) return 0
  const len1 = word1.length
  const len2 = word2.length
  if (len1 === 0) return len2
  if (len2 === 0) return len1
  let dp = Array.from({length: len1 + 1}).map(() => Array.from({length: len2 + 1}))
  dp[0][0] = 0
  for (let i = 1; i <= len1; i++) dp[i][0] = i
  for (let i = 1; i <= len2; i++) dp[0][i] = i
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
    }
  }
  return dp[len1][len2]
}

console.log(minDistance('axcdf', 'abcd'))
console.log(minDistance('ab', 'bc'))
console.log(minDistance('a', 'b'))
