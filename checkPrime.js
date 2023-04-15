const isPrime = (num) => {
    let mid = num/2;
    let cur = 2;
    while (cur <= mid) {
        if (num % cur === 0 && num !== cur) {
            return false;
        }
        cur++;
    }
    return true;
}
//passing through console and access through this syntax :- num=5 node checkPrime.js
console.log(isPrime(5));
