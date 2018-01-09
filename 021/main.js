/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

var mergeTwoLists = function (l1, l2) {
  let arr = []
  while (l1 != null) {
    arr.push(l1.val)
    l1 = l1.next
  }
  while (l2 != null) {
    arr.push(l2.val)
    l2 = l2.next
  }
  if (arr.length === 0) {
    return null
  }
  arr.sort((a, b) => {
    return a - b > 0 ? 1 : -1
  })
  let res = new ListNode(-1)
  let doc = res
  for (let i = 0; i < arr.length; i++) {
    doc.val = arr[i]
    if (i < arr.length - 1) {
      doc.next = new ListNode(-1)
      doc = doc.next
    }
  }
  return res
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

console.log(mergeTwoLists(l1, l2))
