/** 219. Contains Duplicate II
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
    const total = {};
    let res = false;
    nums.forEach((num, index) => {
        if (total[num] || total[num] === 0) {
            let abs = total[num] - index;
            abs = abs < 0 ? -abs : abs;
            total[num] = abs;
            if (total[num] <= k) {
                res = true;
                return;
            }
        } else {
            total[num] = index; 
        }
    })
    return res;
};

const nums = [1,2,3,1,2,3], k = 2;
containsNearbyDuplicate(nums, k);