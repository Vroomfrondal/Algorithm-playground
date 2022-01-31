// You failed this because you didn't initialize a variable to the sort function like sortedDrinks

// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

const drinks1 = [
    { name: "lemonade", price: 1000 },
    { name: "lime", price: 432 },
    { name: "peach", price: 29 },
    { name: "pineapple", price: 500 },
    { name: "apples", price: 243 },
]

function sortDrinkByPrice(drinks) {
    let sortedDrinks = drinks.sort(function (a, b) {
        return a.price - b.price
    })
    return sortedDrinks
}

console.log(drinks1)
sortDrinkByPrice(drinks1)
console.log(drinks1)
