/** 169. Majority Element
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const halfLength = Math.ceil(nums.length/2);
    const total = {};
    let sol;
    nums.forEach((el) => {
        if (!total[el]) {
            total[el] = 0;
        }
        total[el] += 1;
        if (total[el] >= halfLength) {
            sol = el;
        }
    })
    return sol;
};

const nums = [3,2,3];
majorityElement(nums);