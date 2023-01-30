//* Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

// Recursive function to count nodes going left to right
function minDepth(root: TreeNode | null): number {
    // Case for when first node, or children of first node are null

    if (!root) return 0
    if (!root.left && !root.right) return 1

    // Recurse when we have a left or right node
    if (root.left) {
        return 1 + minDepth(root.left)
    }

    if (root.right) {
        return 1 + minDepth(root.right)
    }

    // If leaf, take minimum depth of the left and right nodes
    return Math.min(minDepth(root.left), minDepth(root.right))
}
