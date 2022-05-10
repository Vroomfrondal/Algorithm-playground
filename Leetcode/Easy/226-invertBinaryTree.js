// Recursive DFS Solution that uses prototypes (.left .right)
var invertTree = function (root) {
    let left = root.left
    if (root === null) return

    root.left = root.right
    root.right = left
    invertTree(root.left)
    invertTree(root.right)

    return root
}
