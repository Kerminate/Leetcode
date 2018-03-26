/**
 * @param {number[]} ratings
 * @return {number}
 */

// 解法一
// var candy = function (ratings) {
//   let len = ratings.length
//   if (len < 2) return len
//   let arr = []
//   for (let i = 0; i < len; i++) {
//     let obj = { val: ratings[i], ind: i }
//     arr.push(obj)
//   }
//   arr.sort((a, b) => a.val - b.val > 0 ? 1 : -1)
//   let flag = Array.from({length: len}).map(() => 0)
//   let res = 0
//   for (let i = 0; i < len; i++) {
//     if (arr[i].ind === 0) {
//       flag[arr[i].ind] = flag[1] > 0 ? flag[1] + 1 : 1
//     } else if (arr[i].ind === len - 1) {
//       if (ratings[len - 1] === ratings[len - 2]) flag[len - 1] = 1
//       else flag[len - 1] = flag[len - 2] > 0 ? flag[len - 2] + 1 : 1
//     } else {
//       if (ratings[arr[i].ind] === ratings[arr[i].ind - 1] && ratings[arr[i].ind] === ratings[arr[i].ind + 1]) {
//         flag[arr[i].ind] = flag[arr[i].ind - 1]
//       } else if (ratings[arr[i].ind] === ratings[arr[i].ind - 1]) {
//         flag[arr[i].ind] = flag[arr[i].ind + 1] + 1
//       } else if (ratings[arr[i].ind] === ratings[arr[i].ind + 1]) {
//         flag[arr[i].ind] = flag[arr[i].ind - 1] + 1
//       } else {
//         flag[arr[i].ind] = Math.max(flag[arr[i].ind - 1] + 1, flag[arr[i].ind + 1] + 1)
//       }
//     }
//     res += flag[arr[i].ind]
//   }
//   return res
// }

// 解法二
var candy = function (ratings) {
  let len = ratings.length
  if (len < 2) return len
  let arr = Array.from({length: len}).map(() => 1)
  for (let i = 1; i < len; i++) {
    if (ratings[i - 1] < ratings[i]) arr[i] = arr[i - 1] + 1
  }
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) arr[i] = Math.max(arr[i], arr[i + 1] + 1)
  }
  let res = 0
  for (let i = 0; i < len; i++) res += arr[i]
  return res
}

console.log(candy([1, 2, 3]))
console.log(candy([3, 1, 5, 4, 7, 6, 9, 10, 2, 8]))
console.log(candy([2, 2]))
console.log(candy([1, 2, 2]))
console.log(candy([1, 2, 4, 4, 3]))
console.log(candy([2, 2, 1]))
console.log(candy([58, 21, 72, 77, 48, 9, 38, 71, 68, 77, 82, 47, 25, 94, 89, 54, 26, 54, 54, 99, 64, 71, 76, 63, 81, 82, 60, 64, 29, 51, 87, 87, 72, 12, 16, 20, 21, 54, 43, 41, 83, 77, 41, 61, 72, 82, 15, 50, 36, 69, 49, 53, 92, 77, 16, 73, 12, 28, 37, 41, 79, 25, 80, 3, 37, 48, 23, 10, 55, 19, 51, 38, 96, 92, 99, 68, 75, 14, 18, 63, 35, 19, 68, 28, 49, 36, 53, 61, 64, 91, 2, 43, 68, 34, 46, 57, 82, 22, 67, 89]))
