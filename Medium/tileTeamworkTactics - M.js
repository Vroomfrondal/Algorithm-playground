// In a board game, a piece may advance 1-6 tiles forward
//  depending on the number rolled on a six-sided dice.
//If you advance your piece onto the same tile as another player's piece,
//  both of you earn a bonus.

// Can you reach your friend's tile number in the next roll?
// Create a function that takes your position a and your friend's position b
//   and returns a boolean representation of whether it's
//   possible to earn a bonus on any dice roll.

// Examples:
//    possibleBonus(3, 7) ➞ true
//    possibleBonus(1, 9) ➞ false
//    possibleBonus(5, 3) ➞ false

// Notes:
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

//sumbitted solution
function possibleBonus(a, b) {
    let c = a - b
    c = Math.abs(c)

    if (Math.abs(c) == 0) {
        return false
    } else if (Math.abs(c) > 6) {
        return false
    } else if (a > b) {
        return false
    } else if (Math.abs(c) <= 3) {
        return true
    } else {
        return true
    }
}

// after sumbission... improved solution
function possibleBonus1(a, b) {
    let c = a - b
    c = Math.abs(c)

    if (Math.abs(c) == 0) {
        return false
    } else if (Math.abs(c) > 6) {
        return false
    } else if (a > b) {
        return false
    } else if (Math.abs(c) <= 3) {
        return true
    } else {
        return true
    }
}

// Input
console.log(possibleBonus(3, 7)) // true
console.log(possibleBonus(1, 9)) // false
console.log(possibleBonus(5, 3)) // false
console.log(possibleBonus(5, 5)) // false
console.log(possibleBonus(4, 6))
console.log(possibleBonus(4, 1))
console.log(possibleBonus(2, 3))
console.log(possibleBonus(5, 9))
console.log(possibleBonus(5, 5))
