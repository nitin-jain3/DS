/** 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const a = {};
    let res;
    nums.forEach((num, index) => {
        const key = target - num;
        if (a[key] || a[key] === 0) {
            res = [a[key], index]
        }
        a[num] = index;
    })
    return res;
};

const nums = [2,7,11,15], target = 9;
twoSum(nums, target);