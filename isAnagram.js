/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    const sMap = {};
    const tMap = {};
    for (let i = 0; i < s.length || i < t.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = 0;
        }
        sMap[s[i]] += 1;
        if (!tMap[t[i]]) {
            tMap[t[i]] = 0;
        }
        tMap[t[i]] += 1;
    }
    for (let i = 0; i < s.length || i < t.length; i++) {
        if (sMap[s[i]] === tMap[s[i]]) {
            delete sMap[s[i]];
            delete tMap[s[i]];
        }
    }
    if (Object.keys(sMap).length || Object.keys(tMap).length) {
        return false;
    }
    return true;
};

// Can be done with one map, increase count for one string in map, then decrease for other string while iterations. If map persists than false.
// Can also be done by creating an array of 26 elements and initialising them with 0, increse for one decrease for other. If every element is 0 than done.
// Third way :- split sort and join and check.

const s = "anagram", t = "nagaram";
isAnagram(s, t);
