/** Moores algorithm
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function(nums) {
    let elem = nums[0];
    let occurence = 1;
    for (let i = 1; i < nums.length; i++) {
        if (elem === nums[i]) {
            occurence += 1;
        } else {
            occurence -= 1;
        }
        if (occurence === 0) {
            elem = nums[i];
            occurence = 1;
        }
    }
    console.log(elem);
    return elem;
};

const nums = [3,2,3];
majorityElement(nums);