function fizzBuzz(n) {
    const answers = []

    for (let i = 1; i < n + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) answers.push('FizzBuzz')
        else if (i % 5 === 0) answers.push('Buzz')
        else if (i % 3 === 0) answers.push('Fizz')
        else answers.push(`${i}`)
    }

    return answers
}

console.log(fizzBuzz(3))
console.log('-------------------')
console.log(fizzBuzz(5))
console.log('-------------------')
console.log(fizzBuzz(19))
