/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
var mergeKLists = function (lists) {
  let num = lists.length
  let arr = []
  for (let i = 0; i < num; i++) {
    let item = lists[i]
    while (item != null) {
      arr.push(item.val)
      item = item.next
    }
  }
  arr.sort((a, b) => {
    return a - b > 0 ? 1 : -1
  })
  let res = new ListNode(-1)
  let doc = res
  for (let i = 0; i < arr.length; i++) {
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

console.log(mergeKLists([l1, l2]))
