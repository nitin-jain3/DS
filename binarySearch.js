/*
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

const nums = [-1,0,3,5,9,12], target = 9;

const isPresentOn = function (nums, target, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end)/2);
    if (nums[mid] === target) {
        return mid;
    }
    if (target > nums[mid]) {
        return isPresentOn(nums, target, mid + 1, end);
    } else {
        return isPresentOn(nums, target, start, mid - 1);
    }
}

const search = function(nums, target) {
    return isPresentOn(nums, target, 0, nums.length-1);;
};

search(nums, target);