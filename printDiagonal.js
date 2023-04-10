/* 
Print the diagonal for a 2D array.
*/

const printDiagonal = function(nums) {
    let i = 0;
    let j = 0;
    let k = nums.length -1;
    while ( i < nums.length) {
        console.log(nums[i][j])
        console.log(nums[i][k])
        k--;
        i++;
        j++;
    }
}

const nums = [[1,2,3], [4,5,6], [7,8,9]];
printDiagonal(nums);