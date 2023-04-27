/** 53. Maximum Subarray :- Ladanes Algo
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let max = nums[0], cur = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (cur > max) {
            max = cur;
        }
        if (cur + nums[i] < nums[i]) {
            cur = nums[i];
        } else {
            cur += nums[i];
        }
    }
    return max;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(nums);