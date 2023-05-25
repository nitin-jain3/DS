// Q1. Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well?


// function Node(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
// }

// let a = new Node(1);
// let b = new Node(2, a);
// let c = new Node(3, b);
// let d = new Node(4, c);
// let e = new Node(4, d);

// function removeDuplicates(node) {
//     const duplicates = new Set();
//     while(node?.next !== null) {
//         const { val } = node;
//         duplicates.add(val);
//         node = node.next;
//     }
// }

// removeDuplicates(e);

// Q2: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// const nums = [1,2,3,2,3];

// const findOneRep = (nums) => {
//     const allCounts = nums.reduce((acc, cur) => {
//         if (!acc[cur]) {
//             acc[cur] = 0;
//         }
//         acc[cur] += 1;
//         return acc;
//     }, {});
//     let index = 0;
//     Object.values(allCounts).forEach((el, i) => {
//         if (el === 1) index = i;
//     })
//     return Object.keys(allCounts)[index];
// }

// findOneRep(nums);


function iterable(nums) {
    let counter = 0;
    return function() {
        if (counter >= nums.length) {
            return null;
        }
        counter++;
        return nums[counter - 1];
    }
}
const nums = new Array(1,2,3,4);

const iterator = iterable(nums);
console.log(iterator());
console.log(iterator());
console.log(iterator());

// console.log(iterable(nums)());
// console.log(iterable(nums)());
// console.log(iterable(nums)());
// console.log(iterable(nums)());
// console.log(iterable(nums)());


// Array.prototype.iterate = function () {
//     let counter = 0;
//     return () => {
//         if (counter >= this.length) {
//             return null;
//         }
//         counter++;
//         return this[counter - 1];
//     };
// }

// // console.log(nums.iterate()());
// const iterator = nums.iterate();
// console.log(iterator());
// console.log(iterator());
// console.log(iterator());
// console.log(iterator());
// console.log(iterator());
// nums.iterate()();

