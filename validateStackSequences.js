/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
    const result = [];
    if (pushed.length !== popped.length) {
        return false;
    }
    let j = 0;
    for (let i = 0; i < pushed.length; i++) {
        result.push(pushed[i]);
        while(result.length !== 0 && result[result.length -1] === popped[j]) {
            j++;
            result.pop();
        }
    }
    if (result.length === 0) {
        return true;
    }
    return false;
};

const pushed = [1,2,3,4,5], popped = [4,5,3,2,1];
validateStackSequences(pushed, popped);