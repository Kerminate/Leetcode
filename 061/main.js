/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

var rotateRight = function (head, k) {
  if (head == null) return head
  let num = 1
  let flag = head
  while (flag.next != null) {
    flag = flag.next
    num++
  }
  flag.next = head
  let i = 0
  k = k % num
  while (i < num - k) {
    head = head.next
    i++
  }
  const res = new ListNode(-1)
  let tmp = res
  i = 1
  while (i < num) {
    tmp.next = new ListNode(-1)
    tmp.val = head.val
    head = head.next
    tmp = tmp.next
    i++
  }
  tmp.val = head.val
  return res
}

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(rotateRight(list, 2))
