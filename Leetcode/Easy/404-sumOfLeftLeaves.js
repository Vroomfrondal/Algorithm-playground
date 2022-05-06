var sumOfLeftLeaves = function (root) {
    let sum = 0

    traverseTree = (root) => {
        if (!root) {
            return
        } else {
            if (root.left) {
                if (!root.left.left && !root.left.right) {
                    sum += root.left.val
                }
            }
            traverseTree(root.left)
            traverseTree(root.right)
        }
    }

    traverseTree(root)
    return sum
}
