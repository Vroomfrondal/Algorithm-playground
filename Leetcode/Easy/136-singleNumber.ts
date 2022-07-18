// ? Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//? You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums: number[]) {
    const count: any = {}

    for (let i = 0; i < nums.length; i++) {
        const numValue = nums[i]

        if (count[numValue]) count[numValue] += 1
        else count[numValue] = 1
    }

    return Object.keys(count).find((key) => count[key] == 1)
}

// Test Cases
console.log(singleNumber([2, 2, 3, 4, 4]))
console.log('-------------------')
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log('-------------------')
console.log(singleNumber([2]))
