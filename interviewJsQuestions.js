/*
    Callback function with example
*/
const arr = [1,2,3]
function modifyArray (arr, callback) {
    arr.push(4);
    callback(arr);
}

function callback (arr) {
    console.log(arr);
    console.log('callback added')
}

/*
    Reverse Each word
*/

const str = "Welcome to this Javascript Guide!";
function reverseEachWord (str) {
    const reversed = str.split(' ').reverse().join(' ');
    console.log(reversed);
};


/*
    The below statement will give the output [object Array] to identify it as an array
    console.log(Object.prototype.toString.call(arr))
    console.log(Array.isArray(arr))
*/

/*
check if a number is an integer
    function isInt(num) {
    return num % 1 === 0;
    }

    console.log(isInt(4)); // true
    console.log(isInt(12.2)); // false
    console.log(isInt(0.3)); // false
*/


/*
Write a function that would allow you to do this?
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

Answer :- 

function createBase(baseNumber) {
  return function(N) {
    we are referencing baseNumber here even though it was declared
    outside of this function. Closures allow us to do this in JavaScript
    return baseNumber + N;
  }
}

var addSix = createBase(6);
addSix(10);
addSix(21);

*/

/*
Given two strings, return true if they are anagrams of one another

var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}
*/

/*
closure to create a private counter?
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5); 
c.add(9); 

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14

*/

/*
Input :-
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
Output :- 1undefined
*/

/*
Input :-
(function() {
  var a = b = 5;
})();

console.log(b);

The code above will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it. This is because

var a = b = 5;
is interpreted the following way:

var a = b;
b = 5;

But b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.

*/

