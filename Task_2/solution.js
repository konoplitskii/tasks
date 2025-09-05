/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curMin = prices[0];
    let curMax = 0;

    for(let i = 0; i < prices.length; i++){
        curMin = Math.min(prices[i], curMin);
        curMax = Math.max(prices[i] - curMin, curMax)
    }

    return curMax;
};


maxProfit([7,1,5,3,6,4]) //5
maxProfit([7,6,4,3,1]) //0