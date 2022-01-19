// Create a function which returns the number of true values there are in an array.
// Examples:
//	countTrue([true, false, false, true, false]) ➞ 2
//	countTrue([false, false, false, false]) ➞ 0
//	countTrue([]) ➞ 0

function countTrue(arr) {
    // store true values in new array depending on if truthy
    const truthArray = arr.filter(Boolean).length
    console.log(truthArray)
}
countTrue([true, false, true, false, false, false, false, false])
