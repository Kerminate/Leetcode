/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  if (root == null) return 0
  let res = -99999
  maxPath(root, res)
  return res

  function maxPath (root, ans) {
    if (root == null) return 0
    let l = Math.max(maxPath(root.left, ans), 0)
    let r = Math.max(maxPath(root.right, ans), 0)
    let sum = l + r + root.val
    res = Math.max(res, sum)
    return Math.max(l, r) + root.val
  }
}
