/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const len = path.length
  let arr = Array.from({length: 10}).map(() => '/')
  let point = 0
  let i = 0
  while (i < len) {
    i++
    let mid = ''
    while (i < len && path[i] !== '/') {
      mid += path[i++]
    }
    if (mid === '..') {
      point = point > 0 ? point - 1 : 0
    } else if (mid && mid !== '.') {
      arr[++point] = mid
    }
  }
  let res = ''
  for (let j = 1; j <= point; j++) {
    res += '/' + arr[j]
  }
  if (!point) res = '/'
  return res
}

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/a/./b/../../c/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/..'))
