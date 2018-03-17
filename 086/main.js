/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}
var partition = function (head, x) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  let sort = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < x) sort.push(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= x) sort.push(arr[i])
  }
  let res = new ListNode(-1)
  let doc = res
  for (let i = 0; i < sort.length; i++) {
    doc.next = new ListNode(-1)
    doc = doc.next
    doc.val = sort[i]
  }
  return res.next
}

let l1 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2,
            next: null
          }
        }
      }
    }
  }
}
console.log(partition(l1, 3))
