var arrayStringsAreEqual = function (word1arr, word2arr) {
    // Naive, Slow Approach
    // let firstStr = ''
    // let secondStr = ''

    // word1arr.forEach((str) => {
    //     firstStr += str
    // })

    // word2arr.forEach((str) => {
    //     secondStr += str
    // })

    // console.log(firstStr)
    // if (firstStr === secondStr) return true
    // else return false

    // one-liner ES6
    return word1arr.join('') === word2arr.join('')
}

arrayStringsAreEqual(['ab', 'c'], ['ab', 'c'])
arrayStringsAreEqual(['a', 'cb'], ['ab', 'c'])
