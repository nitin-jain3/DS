/** 268. Missing Number
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const total = nums.length;
    const totalSet = nums.reduce((acc, cur) =>  acc.add(cur), new Set);
    let res;
    for (let index = 0; index <= total; index++) {
        if (!totalSet.has(index)) {
            res = index;
        }
    }
    return res;
};

const nums = [3,0,1];
missingNumber(nums);