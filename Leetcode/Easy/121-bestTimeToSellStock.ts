// ? Prompt: You are given an array prices where prices[i] is the price of a given stock on the ith day.
// ? You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// ? Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// ! Solution's Algorithm:
// lowest stock price will be first price given until recalculated.
// To calc lowest value in array: we take the minimum between the current and initial low price.
// To calc profit: take the maximum between current stock price and the lowest found in array.

function maxProfit(prices: number[]) {
    let prevLowPrice: number = prices[0]
    let profit: number = 0

    prices.forEach((currStockPrice) => {
        prevLowPrice = Math.min(currStockPrice, prevLowPrice)
        profit = Math.max(profit, currStockPrice - prevLowPrice)
    })

    return profit
}

// test-cases
console.log(maxProfit([1, 1, 1, 3, 4]))
console.log('-------------------')
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log('-------------------')
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log('-------------------')
console.log(maxProfit([1, 2, 3, 4]))
