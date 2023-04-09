/** Leet code :- 977
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    if (!nums.length) {
        return nums;
    }
    let start = 0;
    let end = nums.length - 1;
    let result = [];
    while (start <= end) {
        if (nums[start] ** 2  >= nums[end] ** 2) {
            result.push(nums[start] ** 2);
            start++;
        } else {
            result.push(nums[end] ** 2);
            end--;
        }
    }
    return result.reverse();
};

const nums = [-7,-3,2,3,11];
sortedSquares(nums);