// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.
function dominantIndex(nums: number[]) {
    let answer: number = 0
    // apply lets uus pass array of data as parameters to a function
    const largestValue = Math.max.apply(null, [...nums])
    const largestIndex = nums.indexOf(largestValue)

    // Filter largest value from array
    const filtered = nums.filter((num) => num !== largestValue)

    // Loop through array and check if largestValue is > n * 2
    for (let i = 0; i < filtered.length; i++) {
        const currNum = filtered[i]

        // We Exit this loop if current n * 2 ever is larger than the largest num
        if (largestValue >= currNum * 2) answer = largestIndex
        else return (answer = -1)
    }
    return answer
}

console.log(dominantIndex([3, 6, 1, 0]))
console.log('-------------------')
console.log(dominantIndex([0, 0, 0, 2]))
console.log('-------------------')
console.log(dominantIndex([1, 2, 3, 4]))
console.log('-------------------')
console.log(dominantIndex([0, 2, 0, 3]))
