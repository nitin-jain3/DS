/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    if (!nums.length) {
        return 0;
    }
    const pos = binarySearch(nums, 0, nums.length - 1, target);
    return pos;
};

const binarySearch = function (nums, start, end, target) {
    const mid = Math.floor((start + end)/2);
    if (start > end) {
        return start;
    }
    if (nums[mid - 1] < target && nums[mid] > target) {
        return mid;
    } else if (nums[mid] > target) {
        return binarySearch(nums, start, mid -1, target)
    } else if (nums[mid] < target) {
        return binarySearch(nums, mid + 1, end, target)
    } else if (nums[mid] === target) {
        return mid;
    }
}

const nums = [1,3,5,6];
const target = 7;
searchInsert(nums, target);