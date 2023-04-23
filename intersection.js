/** 349. Intersection of Two Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const res = new Set;
    const resSet = nums1.reduce((acc, cur) => acc.add(cur), new Set);
    console.log(resSet);
    nums2.forEach((el) => {
        if (resSet.has(el)) res.add(el);
    });
    return [...res];
};

const nums1 = [1,2,2,1], nums2 = [2,2];
intersection(nums1, nums2);