/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    const stackA = [];
    for (const str of s) {
        if(str !== ']'){
			stackA.push(str) 
		} else {
            let substr = ''
			while(stackA[stackA.length-1] !== '['){
				substr = stackA.pop() + substr
			}
            stackA.pop() 
        }
        let k ='';
        while(stackA && !isNaN(stackA[stackA.length-1])){ // check if it's a number
            k = stackA.pop() + k
        }
        console.log(stackA)
    }
    console.log(stackA)
};

const s = "3[a]2[bc]";
decodeString(s);