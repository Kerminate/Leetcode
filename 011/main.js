/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let len = height.length
  let i = 0
  let j = len - 1
  let max = compute(i, j, height[i], height[j])
  let s
  while (i < j) {
    let hi = height[i]
    let hj = height[j]
    if (hi < hj) {
      while (hi < hj && i < j) {
        i++
        hi = height[i]
        s = compute(i, j, hi, hj)
        if (s > max) max = s
      }
    } else {
      while (hi >= hj && i < j) {
        j--
        hj = height[j]
        s = compute(i, j, hi, hj)
        if (s > max) max = s
      }
    }
  }
  return max
}

function compute (i, j, hi, hj) {
  return (j - i) * Math.min(hi, hj)
}

console.log(maxArea([1, 4, 7, 9, 11, 12]))
console.log(maxArea([1, 1]))
