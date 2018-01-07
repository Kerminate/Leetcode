
 // Definition for singly-linked list.

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode (val) {
  this.val = val
  this.next = null
}

var removeNthFromEnd = function (head, n) {
  let res = new ListNode(-1)
  res.next = head
  let mid = res
  let doc = head
  let arr = []
  while (doc !== null) {
    arr.push(doc.val)
    doc = doc.next
  }
  let len = arr.length
  let num = 0
  if (len === 1) return null
  while (res !== null) {
    if (num === len - n) {
      res.next = res.next.next
    }
    res = res.next
    num++
  }
  return mid.next
}

let l1 = {
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

let l2 = {
  val: 1,
  next: null
}

console.log(removeNthFromEnd(l1, 2))
console.log(removeNthFromEnd(l2, 1))
