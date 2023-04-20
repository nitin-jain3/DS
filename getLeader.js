// Write a program to print all the Leaders in the array.
//  An element is leader if it is greater than all the elements to its right side.
//  And the rightmost element is always a leader. For example in the array
//  {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.
//  Expected time complexity O(n)


function getLeader(nums) {
    let max = 0;
    let res = [];
    if (!nums.length) {
        return res;
    }
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] > max) {
            max = nums[i];
            res.push(nums[i]);
        }
    }
    return res.reverse();
}
const nums = [16, 17, 4, 3, 5, 2];
// getLeader(nums)

