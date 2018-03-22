/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  if (root == null) return
  let par1
  let par2
  let pre
  inorder(root)
  let tmp = par1.val
  par1.val = par2.val
  par2.val = tmp

  function inorder (root) {
    if (root == null) return
    inorder(root.left)
    if (pre && pre.val > root.val) {
      if (!par1) {
        par1 = pre
      }
      par2 = root
    }
    pre = root
    inorder(root.right)
  }
}

let t1 = {
  val: 2,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 1,
    left: null,
    right: null
  }
}
let t2 = {
  val: 2,
  left: null,
  right: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null
    }
  }
}
console.log(recoverTree(t2))
