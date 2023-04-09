/** 189. Rotate Array by k amount to the right
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    if (!nums.length) {
        return nums;
    }
    if (k > nums.length) {
        k = k%nums.length;
    }
    let start = 0;
    let end = nums.length -1;
    while (start <= end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    start = 0;
    end = k -1;
    while (start <= end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    start = k;
    end = nums.length -1;
    while (start <= end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums;
};
const nums = [-1,-100,3,99];
const k = 2;
rotate(nums, k);