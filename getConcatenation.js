/** 1929. Concatenation of Array
 * @param {number[]} nums
 * @return {number[]}
 */
const getConcatenation = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i];
        res[i + nums.length] = nums[i];;
    }
    return res;
};

const nums = [1,2,1];
getConcatenation(nums);