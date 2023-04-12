/** 1046. Last Stone Weight
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones = stones.sort((a,b) => b-a);
        const first = stones.shift();
        const second = stones.shift();
        if (first === second) {
            continue;
        }
        const diff = first - second;
        stones.push(diff);
    }
    return stones;
};

const stones = [2,7,4,1,8,1];
lastStoneWeight(stones);