var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
}

var containsDuplicate = function (nums) {
    const arr = nums.sort() // is .sort even allowed?
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) return true
    }
    return false
}

// Test Cases
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([0, 0, 1, 2, 3, 4]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.log(containsDuplicate([1]))
