const s = 'ccc';
const longestPalindrome = function(s) {
    const pallindromeMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!pallindromeMap[s[i]]) {
            pallindromeMap[s[i]] = 0;
        };
        pallindromeMap[s[i]] += 1;
    }
    const values = Object.values(pallindromeMap);
    let oddValueTaken = false;
    let count = 0;
    values.forEach((value) => {
        if (value %2 !== 0 && !oddValueTaken) {
            count += 1;
            oddValueTaken = true;
        }
        if (value % 2 === 1 && value > 1) {
            count += (value - 1)
        }
        if (value %2 === 0) {
            count += value;
        }
    })
    console.log(count); 
    return count;
};
longestPalindrome(s);