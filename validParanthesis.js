const paran = ['(','(','(',')',')','(','(',')', ')', ')'];
const stack = [];
let bool = true;
for (let i = 0; i < paran.length; i++) {
    if (paran[i] === '(') {
        stack.push(paran[i]);
    } else if (paran[i] === ')' && stack.length) {
        stack.pop();
    } else if (paran[i] === ')' && !stack.length) {
        bool = false;
    }
}
console.log(bool);