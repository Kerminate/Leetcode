/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
var swapPairs = function (head) {
  let arr = []
  while (head != null) {
    arr.push(head.val)
    head = head.next
  }
  let len = arr.length
  for (let i = 0; i < len - 1; i += 2) {
    let tmp = arr[i]
    arr[i] = arr[i + 1]
    arr[i + 1] = tmp
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

console.log(swapPairs(l1))
