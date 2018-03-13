/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

// 解法一
// var deleteDuplicates = function (head) {
//   if (head == null) return head
//   let res = new ListNode(-1)
//   res.val = head.val
//   let mid = res
//   while (head.next) {
//     head = head.next
//     if (mid.val !== head.val) {
//       let tmp = new ListNode(-1)
//       tmp.val = head.val
//       mid.next = tmp
//       mid = mid.next
//     }
//   }
//   return res
// }

// 解法二
var deleteDuplicates = function (head) {
  if (head == null) return head
  let res = head
  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return res
}

let l1 = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 3,
          next: null
        }
      }
    }
  }
}
console.log(deleteDuplicates(l1))
