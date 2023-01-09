function arrayPairSum(nums: number[]): number {
    // callback required for sorting negative numbers
    nums.sort((a, b) => a - b)
    let sum = 0

    // loop over every two numbers which will create "pairs"
    for (let i = 0; i < nums.length; i += 2) {
        // new sum is current itteration because in each pair, the higher number is the 2nd index.
        sum += nums[i]
    }

    return sum
}

arrayPairSum([1, 4, 3, 2])
arrayPairSum([6, 2, 6, 5, 1, 2])
arrayPairSum([6214, -2290, 2833, -7908])
