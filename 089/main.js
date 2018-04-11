/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let arr = []
  for (let i = 0; i < Math.pow(2, n); i++) {
    arr.push(i ^ (i >> 1))
  }
  return arr
}

console.log(grayCode(3))
