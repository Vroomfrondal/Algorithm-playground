// Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (string) {
    // time complexity: o(n)
    // space complexity: o(1)
    // thank you javascript array-methods lol
    // these were the constraints given. had the string been a concatinated-string. I would've .split() first
    string.reverse()

    return string
}

reverseString(["h", "e", "l", "l", "o"])
reverseString(["H", "a", "n", "n", "a", "h"])
