/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height == null || height.length === 0) return 0
  let sum = 0
  let leftMax = 0
  let rightMax = 0
  let i = 0
  let j = height.length - 1
  while (i < j) {
    leftMax = Math.max(leftMax, height[i])
    rightMax = Math.max(rightMax, height[j])
    if (leftMax < rightMax) {
      sum += leftMax - height[i]
      i++
    } else {
      sum += rightMax - height[j]
      j--
    }
  }
  return sum
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
