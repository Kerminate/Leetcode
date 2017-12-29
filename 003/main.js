/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 解法一
  if (s === '') return 0
  let max = 1
  for (let i = 0; i < s.length;) {
    let sub = new Set()
    let j = 0
    while (sub.size === j && (i + j) <= s.length) {
      sub.add(s[i + j])
      j++
    }
    if (max < j) max = j - 1
    let ans = s.slice(i, i + j - 1).split('').reverse().join('')
    let index = ans.indexOf(s[i + j - 1])
    let cur = ans.length - index - 1 + i
    i = cur + 1
  }
  return max
  // 解法二
  // if (s === '') return 0
  // let max = 1
  // let cur = 1
  // let rep
  // for (let i = 1; i < s.length; i++) {
  //   rep = s.substr(i - cur, cur).indexOf(s.substr(i, 1))
  //   if (rep === -1) {
  //     cur++
  //   } else {
  //     cur -= rep
  //   }
  //   if (max < cur) max = cur
  // }
  // return max
}

console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('ugdfgbsdghksjhgus'))
console.log(lengthOfLongestSubstring('abcabcbb'))
