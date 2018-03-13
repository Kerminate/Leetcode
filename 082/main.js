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

var deleteDuplicates = function (head) {
  if (head == null) return head
  let prev = head.val - 1
  let real = new ListNode(-1)
  let res = real
  while (head) {
    if (prev !== head.val && ((head.next && head.val !== head.next.val) || (head.next == null))) {
      real.next = new ListNode(-1)
      real = real.next
      real.val = head.val
    }
    prev = head.val
    head = head.next
  }
  return res.next
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
let l2 = {
  val: 1,
  next: null
}

console.log(deleteDuplicates(l1))
console.log(deleteDuplicates(l2))
