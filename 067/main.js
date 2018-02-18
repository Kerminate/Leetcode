/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const len1 = a.length
  const len2 = b.length
  let num
  let str
  if (len1 > len2) {
    num = len2
    str = a
  } else {
    num = len1
    str = b
  }
  const s1 = a.split('').reverse().join('')
  const s2 = b.split('').reverse().join('')
  const su = str.split('').reverse().join('')
  let s3 = []
  let mid = 0
  let flag = 0
  for (let i = 0; i < num; i++) {
    mid = parseInt(s1[i]) + parseInt(s2[i]) + flag
    if (mid >= 2) {
      mid -= 2
      flag = 1
    } else {
      flag = 0
    }
    s3.push(mid)
  }
  for (let i = num; i < str.length; i++) {
    mid = parseInt(su[i]) + flag
    if (mid >= 2) {
      mid -= 2
      flag = 1
    } else {
      flag = 0
    }
    s3.push(mid)
  }
  if (flag) s3.push(1)
  return s3.reverse().join('')
}

console.log(addBinary('1010', '1011'))
console.log(addBinary('1111', '1111'))
