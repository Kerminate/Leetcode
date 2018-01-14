/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'bba'))
