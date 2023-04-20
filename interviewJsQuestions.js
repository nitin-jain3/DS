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


/*
https://thatjsdude.com/interview/js1.html (Beginer)
https://thatjsdude.com/interview/js2.html (Intermediate)
*/

/*

Promise is an object that represents eventual completion of an asyn operation.
Streams :- readable, writable, duplex, transform

ACID :- 
Atomicity - Transaction will happen at once or it will fail. Notihing in betweem
Consitency - DB must be consistent before and after the Transaction
Isolation - Multiple transactions happen independently without interference
Durability - The changes of a successfull transaction occurs even if the system failure occurs.

Normalisaton :- Normalization is the process of organizing the data in the database. minimise redundancy.

Types:-
1NF - is 1NF if it contains a unique primary key.
2NF - is 1NF and all of the attributes are dependent on primary key.
3NF - No transitive dependency exists.

Transactions :- Group of tasks.

Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, 
and executes JavaScript code outside a web browser.

Why is Node.js single-threaded?
Node.js works on the single-threaded model to ensure that there is support for asynchronous processing. With this, it makes it scalable and efficient for applications to provide high performance and efficiency under high amounts of load.

Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error and this is happening due to the 1st phase (memory creation phase) of the Execution Context.

So in previous lecture, we learnt that execution context gets created in two phase, so even before code execution, memory is created so in case of variable, it will be initialized as undefined while in case of function the whole function code is placed in the memory. 

Temporal Dead Zone : Time since when the let variable was hoisted until it is initialized some value. So any line till before "let a = 10" is the TDZ for a Since a is not accessible on global, its not accessible in window/this also.
indow.b or this.b -> 15; But window.a or this.a ->undefined, just like window.x->undefined (x isn't declared
anywhere)
Reference Error are thrown when variables are in temporal dead zone.
Syntax Error doesn't even let us run single line of code.


Shadowing :-
If one has same named variable outside the block, the variable inside the block shadows the outside variable. This happens only for var.

Ilegal Shadowing :-
We cannot shadow let with var. But it is valid to shadow a let using a let. However, we can shadow var with let.


Closures in JS :- 

Function bundled along with it's lexical scope is closure.
JavaScript has a lexcial scope environment. If a function needs to access a variable, it first goes to its local memory. When it does not find it there, it goes to the memory of its lexical parent. 


*/