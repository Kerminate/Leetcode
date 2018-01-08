/**
* @param {string} s
* @return {boolean}
*/
var isValid = function (s) {
  let arr = []
  let len = s.length
  for (let i = 0; i < len; i++) {
    arr.push(s[i])
    let ll = arr.length
    if (ll > 1 && judge(arr[ll - 2], arr[ll - 1])) {
      arr.splice(ll - 2, 2)
    }
  }
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
}

function judge (s1, s2) {
  if ((s1 === '[' && s2 === ']') ||
    (s1 === '(' && s2 === ')') ||
    (s1 === '{' && s2 === '}')) {
    return true
  } else {
    return false
  }
}

// console.log(isValid('()[]{}'))
// console.log(isValid('([)]'))
console.log(isValid('([])'))
