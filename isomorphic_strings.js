const s = 'paper';
const t = 'title';

function getMaxLength(s, t) {
    const firstStringLength = s.length;
    const secStringLength = t.length;
    if (firstStringLength > secStringLength) {
        return firstStringLength;
    }
    return secStringLength;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const maxLength = getMaxLength(s, t);
    const isomorphicMap = {};
    const reverseIsomorphicMap = {};
    let isIsomorphicString = true;
    for (let i = 0; i < maxLength; i++) {
        if (isomorphicMap[s[i]] && isomorphicMap[s[i]] !== t[i]) {
            isIsomorphicString = false;
        }
        if (reverseIsomorphicMap[t[i]] && reverseIsomorphicMap[t[i]] !== s[i]) {
            isIsomorphicString = false;
        }
        isomorphicMap[s[i]] = t[i];
        reverseIsomorphicMap[t[i]] = s[i];
    }
    return isIsomorphicString;
};

isIsomorphic(s, t);