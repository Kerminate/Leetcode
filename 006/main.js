/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  let len = s.length
  let dis = 2 * numRows - 2
  let sub = ''
  let i = 0
  let j = 1
  while (i < len) {
    sub += s[i]
    i += dis
  }
  while (j < numRows - 1) {
    i = j
    let flag = true
    while (i < len) {
      sub += s[i]
      if (flag) {
        i += dis - 2 * j
        flag = false
      } else {
        i += 2 * j
        flag = true
      }
    }
    j++
  }
  i = numRows - 1
  while (i < len) {
    sub += s[i]
    i += dis
  }
  return sub
}

console.log(convert('PAYPALISHIRING', 3))
console.log(convert('ABCDE', 4))
