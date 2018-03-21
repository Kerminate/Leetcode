/**
 * Definition for a binary tree node.
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

var generateTrees = function (n) {
  return helper(1, n)

  function helper (min, max) {
    let result = []
    if (min > max) return result
    for (let i = min; i <= max; i++) {
      let leftList = helper(min, i - 1)
      let rightList = helper(i + 1, max)
      if (leftList.length === 0 && rightList.length === 0) {
        let root = new TreeNode(i)
        result.push(root)
      } else if (leftList.length === 0) {
        for (let val of rightList) {
          let root = new TreeNode(i)
          root.right = val
          result.push(root)
        }
      } else if (rightList.length === 0) {
        for (let val of leftList) {
          let root = new TreeNode(i)
          root.left = val
          result.push(root)
        }
      } else {
        for (let left of leftList) {
          for (let right of rightList) {
            let root = new TreeNode(i)
            root.left = left
            root.right = right
            result.push(root)
          }
        }
      }
    }
    return result
  }
}

console.log(generateTrees(3))
