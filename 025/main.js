/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
var reverseKGroup = function (head, k) {
  let arr = []
  while (head != null) {
    arr.push(head.val)
    head = head.next
  }
  let len = arr.length
  for (let i = 0; i <= len - k; i += k) {
    let mid = arr.slice(i, i + k).reverse()
    arr.splice(i, k, ...mid)
  }
  let res = new ListNode(-1)
  let doc = res
  for (let i = 0; i < len; i++) {
    doc.next = new ListNode(-1)
    doc = doc.next
    doc.val = arr[i]
  }
  return res.next
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

console.log(reverseKGroup(l1, 2))
