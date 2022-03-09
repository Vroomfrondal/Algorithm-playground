var twoSum = function (nums, target) {
    const indices = []
    // nested loop to check both numbers equal target-number
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indices.push(i)
                indices.push(j)
            }
        }
    }

    // push indicies of target numbers to indicies array
    console.log(indices)
    return indices
}

twoSum([3, 9, 11, 3], 6)
