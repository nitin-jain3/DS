/** 1920. Build Array from Permutation
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(nums[nums[i]]);
    }
    return res;
};

nums = [0,2,1,5,3,4];
buildArray(nums);