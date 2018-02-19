/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const len = words.length
  let res = []
  let arr = []
  let sum = words[0].length
  let mid = ''
  if (!sum) {
    while (maxWidth--) mid += ' '
    res.push(mid)
  } else {
    arr.push(words[0])
  }
  for (let i = 1; i < len; i++) {
    if (sum + words[i].length + 1 <= maxWidth) {
      sum += words[i].length + 1
      arr.push(' ' + words[i])
    } else {
      let space = maxWidth - sum
      mid = ''
      if (arr.length === 1) {
        mid += arr[0]
        while (space--) mid += ' '
        res.push(mid)
      } else {
        let num = Math.floor(space / (arr.length - 1))
        let point = space % (arr.length - 1)
        for (let j = 0; j < arr.length - 1; j++) {
          mid += arr[j]
          for (let k = 0; k < num; k++) {
            mid += ' '
          }
          if (j < point) mid += ' '
        }
        mid += arr[arr.length - 1]
        res.push(mid)
      }
      sum = words[i].length
      arr.splice(0, arr.length)
      arr.push(words[i])
    }
  }
  if (sum) {
    mid = ''
    for (let i = 0; i < arr.length; i++) {
      mid += arr[i]
    }
    let num = maxWidth - mid.length
    while (num--) mid += ' '
    res.push(mid)
  }
  return res
}

console.log(fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16))
console.log(fullJustify(['a'], 1))
console.log(fullJustify(['What', 'must', 'be', 'shall', 'be.'], 12))
console.log(fullJustify([''], 12))
console.log(fullJustify([''], 0))
console.log(fullJustify(['a', 'b', 'c', 'd', 'e'], 1))
console.log(fullJustify(['Listen', 'to', 'many,', 'speak', 'to', 'a', 'few.'], 6))
