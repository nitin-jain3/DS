const prices = [0,3,8,6,8,6,6,8,2,0,2,7];
const maxProfit = function(prices) {
    let profit = 0;
    let maxProfits = [];
    maxProfits[prices.length -1] = prices[prices.length - 1];
    for (let i = prices.length - 2; i >= 0; i--) {
        maxProfits[i] = Math.max(maxProfits[i+1], prices[i]);
    }
    for (let i = 0; i < prices.length; i++) {
        profit = Math.max(maxProfits[i] - prices[i], profit);
    }
    return profit;
};

maxProfit(prices);