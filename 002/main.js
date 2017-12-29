/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function (l1, l2) {
  const doc = new ListNode(-1)
  let res = doc
  let ans = 0
  while (l1 != null || l2 != null || ans !== 0) {
    res.next = new ListNode(-1)
    res = res.next
    let val1 = l1 === null ? 0 : l1.val
    let val2 = l2 === null ? 0 : l2.val
    res.val = (val1 + val2 + ans) % 10
    ans = Math.floor((val1 + val2 + ans) / 10)
    l1 = l1 == null ? l1 : l1.next
    l2 = l2 == null ? l2 : l2.next
  }
  return doc.next
}

let l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null
    }
  }
}

let l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(addTwoNumbers(l1, l2))
