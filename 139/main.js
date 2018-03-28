/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set()
  for (let str of wordDict) {
    set.add(str)
  }
  const len = s.length
  const arr = Array.from({length: len + 1}).map(() => false)
  arr[0] = true
  for (let i = 1; i <= len; i++) {
    for (let j = i; j > 0; j--) {
      let str = s.substring(i - j, i)
      if (set.has(str)) {
        if (arr[i - j]) arr[i] = true
      }
    }
  }
  return arr[len]
}

console.log(wordBreak('leetcode', ['leet', 'code']))
