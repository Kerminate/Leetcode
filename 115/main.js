/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let len1 = s.length
  let len2 = t.length
  let arr = Array.from({length: len1 + 1}).map(() => Array.from({length: len2 + 1}, () => 0))
  for (let i = 0; i <= len1; i++) arr[i][0] = 1
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s[i - 1] === t[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
      } else {
        arr[i][j] = arr[i - 1][j]
      }
    }
  }
  return arr[len1][len2]
}

console.log(numDistinct('rabbbit', 'rabbit'))
