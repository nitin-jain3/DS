/** 344. Reverse String
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function(s) {
    if (!s.length) {
        return s;
    }
    let res = '';
    let end = s.length - 1;
    while (end >= 0) {
        res+= s[end];
        end--;
    }
    s = res;
    console.log(s);
    return res;
};

let s = 'while';
reverseString(s);