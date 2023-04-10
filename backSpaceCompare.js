/**  844. Backspace String Compare
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    let sStack = [];
    let tStack = [];
    for (let i = 0; i < s.length || i < t.length; i++) {
        if (s[i] === '#') {
            sStack.pop();
        } else {
            sStack.push(s[i]);
        }
        if (t[i] === '#') {
            console.log(tStack);
            tStack.pop();
        } else {
            tStack.push(t[i]);
        }
    }
    // console.log(sStack, tStack);
    let result = true;
    for (let i = 0; i < s.length || i < t.length; i++) {
        console.log(sStack[i], tStack[i])
        if (sStack[i] !== tStack[i]) {
            result = false;
        }
    }
    return result;
};

const s = "xywrrmp", t = "xywrrmu#p";
backspaceCompare(s, t);