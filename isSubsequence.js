const s = "abc";
const t = "ahbgdc";

const isSubsequence = function(s, t) {
    let isSubsequenceString = false;
    if (t.length < s.length) {
        return isSubsequenceString;
    }
    let firstPointer = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[firstPointer] !== t[i]) {
            continue;
        }
        firstPointer += 1;
        if (firstPointer >= s.length) {
            isSubsequenceString = true;
        }
    }
    return isSubsequenceString;
};

isSubsequence(s, t);