// O(log n) (accepted) - Binary Search
var search = function (nums, target) {
    start = 0
    end = nums.length - 1

    while (start < end) {
        let middle = start + Math.floor((end - start + 1) / 2)

        // handle bottom half of array
        if (target < nums[middle]) {
            end = middle - 1
        } else {
            start = middle
        }
    }
    //return nums[start] == target ? start : -1

    if (nums[start] === target) return nums[start]
    else return -1
}

console.log(search([1, 5, 6, 7, 9, 12], 9))
