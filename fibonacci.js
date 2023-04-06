/**  Writting a code for fibonaci with DP.
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
    const numMap = {
        0: 0,
        1: 1,
    };
    if (n <= 1) {
        return numMap[n] ;
    }
    calculate(numMap, n);
    return numMap[n-1] + numMap[n-2]
};

function calculate(numMap, n) {
    if (n <=1) {
        return;
    }
    calculate(numMap, n-1);
    numMap[n] = numMap[n-1] + numMap[n-2];
}

fib(10);