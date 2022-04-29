// Only beats 44.6%. instead of checking for !, check if child nodes are === null!!
var sumOfLeftLeaves = function (root) {
    let sum = 0

    traverseTree = (currRoot) => {
        // base case to end recursion
        if (!currRoot) {
            return
        }

        // Else: if current root has a child, check that sub tree
        if (currRoot.left) {
            // Add child node to sum because its a leaf (children absent)
            if (!currRoot.left.left && !currRoot.left.right) {
                sum += currRoot.left.val
            }
        }
        // traverse through binary tree subtree's
        traverseTree(currRoot.left)
        traverseTree(currRoot.right)
    }
    // invoke on main root
    traverseTree(root)
    return sum
}
