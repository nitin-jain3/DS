/** 167. Two Sum II - Input Array Is Sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
        if (numbers[start] + numbers[end] > target) {
            end--;
        } else if (numbers[start] + numbers[end] < target) {
            start++
        } else {
            return [start+1, end+1];
        }
    }
};

const numbers = [2,7,11,15];
const target = 9;
const a = twoSum(numbers, target);
console.log(a);