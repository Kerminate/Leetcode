/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let arr = []
  const len = nums1.length
  for (let i = 0; i < n; i++) arr.push(nums2[i])
  nums1.splice(m, len - m, ...arr)
  nums1.sort((a, b) => a - b > 0 ? 1 : -1)
}

console.log(merge([0], 0, [1], 1))
