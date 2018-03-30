/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const len = s.length
  let is = Array.from({length: len}).map(() => Array.from({length: len}, () => 0))
  let minCuts = Array.from({length: len}).map(() => len - 1)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (s[i] === s[j]) {
        if (i - j <= 1 || is[j + 1][i - 1]) {
          is[j][i] = 1
          if (!j) minCuts[i] = 0
          else {
            minCuts[i] = Math.min(minCuts[i], minCuts[j - 1] + 1)
          }
        }
      }
    }
  }
  return minCuts[len - 1]
}

console.log(minCut('aaabaa'))
