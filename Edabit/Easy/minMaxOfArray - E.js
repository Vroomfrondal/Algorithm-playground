function minMax(arr) {
    const min = Math.min(...arr) // ES6 destructuring assigment
    const max = Math.max(...arr) // ES6 destructuring assigment
    console.log(min, max)
}

minMax([1, 2, 3, 4])
minMax([24, 50, 33, 25])
