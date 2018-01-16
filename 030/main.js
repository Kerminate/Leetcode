/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let num = words.length
  let size = words[0].length
  let total = num * size
  let len = s.length
  let res = []
  for (let i = 0; i <= len - total; i++) {
    let start = i
    let arr = words.slice() // 数组赋值
    while (arr.length > 0) {
      let str = s.substr(start, size)
      let index = arr.indexOf(str)
      if (index === -1) break
      arr.splice(index, 1)
      start += size
    }
    if (arr.length === 0) res.push(i)
  }
  return res
}

// console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']))
console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'good']))
