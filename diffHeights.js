const heights = [1,1,4,2,1,3]
const map = {};
heights.forEach((h) => {
    if (!map[h]) {
        map[h] = 0;
    }
    map[h]++;
});
const nums = [];
Object.keys(map).forEach((key) => {
    const times = map[key];
    for (let i = 0; i < times; i++) {
        nums.push(key);
    }
})
let res = 0;
for (let i = 0; i < heights.length; i++) {
    if (heights[i] != nums[i]) {
        res++;
    }
}