/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits == null || digits.length === 0) return []
  const str = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const len = digits.length
  let res = []

  const dfs = function (index, pro) {
    const sel = str[digits[index]]
    for (let i = 0; i < sel.length; i++) {
      if (index === len - 1) {
        res.push(pro + sel[i])
      } else {
        dfs(index + 1, pro + sel[i])
      }
    }
  }

  dfs(0, '')
  return res
}

console.log(letterCombinations('234'))
