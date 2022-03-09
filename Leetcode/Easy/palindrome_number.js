var isPalindrome = function (x) {
    const xAsString = x.toString()
    const reversedX = xAsString.split("").reverse().join("")

    if (reversedX === xAsString) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

// Input
isPalindrome(101)
isPalindrome(-121)
isPalindrome(10)
