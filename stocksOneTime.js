const prices = [7,1,5,3,6,4];
let len = prices.length - 1;
const maxOnThatDay = [];
maxOnThatDay[len] = prices[len];
for (let i = len - 1; i >=0 ; i--) {
    if (prices[i] > maxOnThatDay[i + 1]){
        maxOnThatDay[i] = prices[i];
    } else {
        maxOnThatDay[i] = maxOnThatDay[i + 1];
    }
}
let profit = 0;
for (let i = 0; i < prices.length; i++) {
    if (maxOnThatDay[i] - prices[i] > profit) {
        profit = maxOnThatDay[i] - prices[i];
    }
}
console.log(profit);