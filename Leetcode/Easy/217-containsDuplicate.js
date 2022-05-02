//checking every value in the array Time: O(n^2). Space: O(1) Space
var containsDuplicate1 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
            else false
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

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([0]))
