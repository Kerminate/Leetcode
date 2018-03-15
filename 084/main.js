/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length
  let arr = []
  let maxArea = 0
  let left
  let right
  let hei
  let size
  for (let i = 0; i <= len; i++) {
    size = arr.length
    while (size > 0 && (heights[arr[size - 1]] > heights[i] || i === len)) {
      hei = arr.slice(-1)
      arr.splice(-1)
      right = i
      left = size > 1 ? arr[size - 2] : -1
      maxArea = Math.max(maxArea, heights[hei] * (right - left - 1))
      size--
    }
    arr.push(i)
  }
  return maxArea
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
console.log(largestRectangleArea([2, 4, 6, 5, 7, 3]))
console.log(largestRectangleArea([0, 9]))
