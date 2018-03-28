/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set()
  const map = new Map()
  for (let str of wordDict) {
    set.add(str)
  }
  let res = helper(s)
  return res

  function helper (s) {
    if (map.has(s)) return map.get(s)
    if (s.length === 0) return null
    let res = []
    for (let i = 1; i <= s.length; i++) {
      let str = s.substring(0, i)
      let part = null
      if (set.has(str)) {
        part = helper(s.substring(i))
        if (part == null) {
          res.push(str)
        } else {
          for (let sec of part) {
            res.push(str + ' ' + sec)
          }
        }
      }
    }
    map.set(s, res)
    return res
  }
}
console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))
