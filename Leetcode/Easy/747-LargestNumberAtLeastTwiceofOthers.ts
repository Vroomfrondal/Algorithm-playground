// ! Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
// ! Solution: Faster than 60% of submissions,
function dominantIndex(nums: number[]) {
    let answer: number = 0
    // Unpack all items in nums array and take max value as well as index of max value
    const largestValue: number = Math.max(...nums)
    const largestIndex: number = nums.indexOf(largestValue)

    // Filter out the largestValue from array since we don't need to compare it to itself
    const filteredArr = nums.filter((num) => num !== largestValue)

    // Loop through new array and check if largestValue is ever >= n * 2
    for (let i = 0; i < filteredArr.length; i++) {
        const currNum = filteredArr[i]

        // If the current loop itteration is *ever* more than the largestValue, return -1.
        if (largestValue >= currNum * 2) answer = largestIndex
        else return (answer = -1)
    }

    return answer
}

// Test Cases
console.log(dominantIndex([3, 6, 1, 0]))
console.log('-------------------')
console.log(dominantIndex([0, 0, 0, 2]))
console.log('-------------------')
console.log(dominantIndex([1, 2, 3, 4]))
console.log('-------------------')
console.log(dominantIndex([0, 2, 0, 3]))
