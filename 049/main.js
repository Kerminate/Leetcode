/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  const res = []
  for (let i = 0; i < strs.length; i++) {
    let arr = strs[i].slice().split('')
    arr.sort()
    let nor = arr.join('')
    if (map.has(nor)) {
      let val = map.get(nor)
      val.push(strs[i])
      map.set(nor, val)
    } else {
      map.set(nor, [strs[i]])
    }
  }
  for (let val of map.values()) {
    res.push(val)
  }
  return res
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
