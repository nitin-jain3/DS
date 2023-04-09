/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
    const length = cost.length;
    for (let i=2; i <cost.length; i++) {
        cost[i] = (Math.min(cost[i-1], cost[i-2]) + cost[i]) 
    }
    return Math.min(cost[length - 1], cost[length - 2]);
};