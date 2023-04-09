/** 557. Reverse Words in a String III
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    s = s.split(' ');
    let res = '';
    s.forEach((el, index) => {
        let end = el.length - 1;
        while (end >= 0) {
            res += el[end];
            end--;
        }
        if (index !== s.length - 1) {
            res += ' ';
        }
    });
    return res;
};

const s = "Let's take LeetCode contest";
reverseWords(s);