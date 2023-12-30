
/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

function maxProfit(prices: number[]): number {
  let boughtOn = 0;
  let soldOn = 1;
  let maxProfit = 0;

  while (soldOn < prices.length) {
    if (prices[boughtOn] < prices[soldOn]) {
      const profit = prices[soldOn] - prices[boughtOn];

      maxProfit = profit > maxProfit ? profit : maxProfit;
    } else {
      boughtOn = soldOn;
    }
    soldOn++;
  }

  return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([2,1,4]))
console.log(maxProfit([7,1,5,3,6,4]))