/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

var inorderTraversal = function (root) {
  let arr = []
  inorder(root)
  return arr

  function inorder (node) {
    if (node == null) return
    inorder(node.left)
    arr.push(node.val)
    inorder(node.right)
  }
}

let tree = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
}

console.log(inorderTraversal(tree))
