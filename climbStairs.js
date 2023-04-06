/* 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = function(n) {
    const stairsMap = {
        0: 1,
        1: 1,
    };
    getStairsCount(stairsMap, n);
    return stairsMap[n];
};

function getStairsCount(stairsMap, n) {
    if (n <=1 ) {
        return stairsMap[n];
    }
    getStairsCount(stairsMap, n-1);
    stairsMap[n] = stairsMap[n-1] + stairsMap[n-2]
}
