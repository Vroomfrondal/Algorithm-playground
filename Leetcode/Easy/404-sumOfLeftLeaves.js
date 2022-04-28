// passes leetcode test cases but fails soemthing like [5, null, 7, 6, 10] and I don't know why
var sumOfLeftLeaves = function (root) {
    let sum = 0

    function traverseTree(root) {
        if (!root) {
            return
        }

        if (root.left) {
            //checking children nodes
            if (root.left.left === null) {
                sum += root.left.val
                traverseTree(root.right)
            }
        }
    }
    traverseTree(root)
    return sum
}
