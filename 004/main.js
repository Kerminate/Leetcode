/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let s = nums1.concat(nums2).sort((a, b) => {
    return a - b
  })
  let len = s.length
  if (len % 2 === 0) {
    return (s[len / 2 - 1] + s[len / 2]) / 2
  } else {
    return s[Math.floor(len / 2)]
  }
}

// console.log(findMedianSortedArrays([1, 2], [3, 4]))
// console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1], [2, 3, 4, 5, 6, 7, 8, 9, 10]))
