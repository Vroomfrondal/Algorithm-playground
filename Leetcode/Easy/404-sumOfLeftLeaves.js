// Recursive solution that beats 99% in time
var sumOfLeftLeaves = function (root) {
    let sum = 0

    traverseTree = (root) => {
        // base case to end recursion
        if (!root) {
            return
        }

        // Child nodes? Check them!
        if (root.left) {
            // Add child node to sum because its a leaf (children absent)
            if (root.left.left === null && root.left.right === null) {
                sum += root.left.val
            }
        }
        // traverse through binary tree subtree's
        traverseTree(root.left)
        traverseTree(root.right)
    }
    // invoke on main root
    traverseTree(root)
    return sum
}
