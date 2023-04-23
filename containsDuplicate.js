/** 217. Contains Duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const elements = {};
    let result = false;
    nums.forEach((el) => {
        if (!elements[el]) {
            elements[el] = 0;
        }
        elements[el] += 1;
        if (elements[el] > 1) {
            result = true;
        }
    })
    return result;
};

const nums = [1,2,3,1];
containsDuplicate(nums);    