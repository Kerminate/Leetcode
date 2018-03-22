/**
 * Definition for a binary tree node.
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

var isValidBST = function (root) {
  if (root == null) return true
  return helper(root, null, null)

  function helper (root, min, max) {
    if (root == null) return true
    if ((min != null && root.val <= min) || (max != null && root.val >= max)) return false
    let left = helper(root.left, min, root.val)
    let right = helper(root.right, root.val, max)
    return left && right
  }
}

let t1 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

console.log(isValidBST(t1))
