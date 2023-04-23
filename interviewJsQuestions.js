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

hooks in mongoDb :-
pre hook, if i want to update anything before a transaction takes place then pre hook
post hook, if i want to update anything after a transaction takes place then post hook.


Elasticsearch is built for search and provides advanced data indexing capabilities. For data analysis, it operates alongside Kibana, and Logstash to form the ELK stack.

MongoDB lets you manage, store and retrieve document-oriented information. It provides features such as fast ad-hoc queries, indexing, load balancing, data aggregation, and server-side JavaScript execution.

GET is a command that retrieves the value of a key in Redis. It's used to retrieve simple values that are stored as strings, such as user IDs or product names.

On the other hand, HGET is a command that retrieves the value of a field in a Redis hash. A hash is like a dictionary where each key is associated with a value. HGET is used to retrieve values from more complex data structures like hashes.

So, if you have a simple key-value pair, you can use GET to retrieve its value. For example, if you have a key called "user:1234" that stores the name of a user, you can use GET user:1234 to retrieve the user's name.

But if you have a more complex data structure like a hash that stores information about a user, with fields like "name", "email", and "age", you would use HGET to retrieve the value of a specific field. For example, you could use HGET user:1234 name to retrieve the name of the user with ID "1234" from the "user" hash.

So, in summary, GET is used for simple key-value pairs, and HGET is used for retrieving values from more complex data structures like hashes.

Serverless architecture is a cloud computing model where the cloud provider manages the infrastructure and resources required to run an application. With serverless architecture, developers can focus on writing the application code without worrying about managing and scaling the underlying infrastructure.

In a serverless architecture, the cloud provider dynamically allocates resources as needed to run the application code. The code is executed in stateless containers that are created on-demand and destroyed when no longer needed. The pricing model is usually based on the actual usage of resources, rather than a fixed amount of resources allocated for a specific period of time.

One of the main advantages of serverless architecture is scalability. The cloud provider can automatically scale up or down the number of containers running the application code based on the incoming traffic or workload. This ensures that the application can handle spikes in traffic without any manual intervention or provisioning of additional resources.

Node.js is well-suited for serverless architectures because of its event-driven, non-blocking I/O model, which allows it to handle many simultaneous requests efficiently. Here are some ways to scale Node.js applications with serverless architecture:

Function-as-a-Service (FaaS): Using a FaaS platform like AWS Lambda or Google Cloud Functions, developers can write small functions that are triggered by events, such as incoming requests or messages. These functions can be scaled up or down automatically based on the incoming traffic.

API Gateway: API Gateway services like AWS API Gateway or Azure API Management can be used to manage and scale APIs. These services can handle routing, security, caching, and other aspects of API management, and can scale automatically to handle increasing traffic.

Event-driven Architecture: Node.js can be used to build event-driven architectures that rely on serverless technologies like AWS EventBridge or Azure Event Grid. These services can help manage and scale event-driven workflows, such as processing streams of data or triggering actions based on specific events.

Overall, serverless architecture can help improve the scalability, performance, and cost-efficiency of Node.js applications, by providing a flexible and scalable infrastructure that can be automatically managed by the cloud provider.

Here are some ways to scale Node.js applications:

Vertical Scaling: This involves adding more resources to a single server or instance to handle more requests. This can be done by adding more CPU, RAM, or storage to the server.

Horizontal Scaling: This involves adding more instances of the Node.js application to handle more requests. This can be done by deploying the application across multiple servers or instances and load balancing the traffic between them.

Caching: Caching can be used to reduce the load on the server and improve performance. Popular caching solutions for Node.js include Redis, Memcached, and Varnish.

Microservices: Breaking a monolithic application into smaller, independent services that can be developed and deployed separately can improve scalability and flexibility. This approach allows you to scale specific services as needed.

Serverless Architecture: In a serverless architecture, the infrastructure is managed by the cloud provider, and developers only need to focus on writing the application code. This can greatly simplify scaling and reduce costs.

Database Scaling: Scaling the database can also help improve the scalability of a Node.js application. This can be done by sharding, which involves distributing data across multiple database instances, or using a distributed database like Apache Cassandra.

Asynchronous Processing: Node.js is designed to handle asynchronous I/O, which can help improve the performance and scalability of applications. Using asynchronous processing can reduce the number of threads required to handle requests, and allow the server to handle more requests simultaneously.

Overall, scaling a Node.js application requires careful consideration of the specific requirements and characteristics of the application, as well as the available resources and infrastructure.

Event-driven programming is a programming paradigm where the flow of the program is determined by events that occur in the system, rather than by a sequential set of instructions. In Node.js, this means that the application listens for events, such as HTTP requests or file system changes, and responds to them in real-time. This is made possible by Node.js's event loop, which constantly checks for new events and runs the appropriate callbacks.

Error handling is an important aspect of any Node.js application, as it helps prevent crashes and unexpected behavior. Some best practices for error handling include using try-catch blocks to handle synchronous errors, using callbacks or promises to handle asynchronous errors, logging errors to a centralized system for easier debugging, and avoiding throwing errors directly in production code.

setImmediate(), setTimeout(), and process.nextTick() are all used for scheduling tasks in Node.js, but they have slightly different behaviors. setImmediate() schedules a callback to run in the next iteration of the event loop, after any I/O events have been processed. setTimeout() schedules a callback to run after a certain amount of time has elapsed. process.nextTick() schedules a callback to run at the beginning of the next iteration of the event loop, before any I/O events have been processed. The choice between these methods depends on the specific use case, but generally setImmediate() is preferred for I/O-bound tasks and process.nextTick() is preferred for CPU-bound tasks.

Dependency management is the process of managing the external libraries and packages that a Node.js application depends on. Best practices for dependency management include using a package manager like npm, keeping dependencies up-to-date to avoid security vulnerabilities, using a lock file to ensure consistent builds across different environments, and avoiding transitive dependencies that can cause compatibility issues.

Asynchronous code is a common pattern in Node.js, and it can quickly lead to callback hell if not handled properly. Some common patterns for handling asynchronous code include using promises or async/await syntax to chain multiple async operations, using modules like async.js or bluebird for more advanced control flow, and refactoring code into smaller, more manageable functions.

Performance optimization is a complex topic, but some general tips for optimizing Node.js applications include profiling code to identify performance bottlenecks, caching frequently accessed data to reduce database queries, using a load balancer to distribute requests across multiple servers, and avoiding synchronous code wherever possible. Popular profiling and debugging tools for Node.js include Node.js's built-in perf_hooks module, the V8 inspector, and the Chrome DevTools.

Profiling code means analyzing the performance of a program to identify potential bottlenecks or areas of slow execution. This can involve measuring the time taken by different sections of the code to execute, tracking the memory usage of the program, and identifying areas of high CPU usage. Once these bottlenecks are identified, developers can optimize the code to improve performance, for example by refactoring slow functions, caching frequently accessed data, or reducing the amount of I/O operations. Profiling can be done using various tools and techniques, such as the built-in console.time() function in Node.js, dedicated profiling libraries like node-profiler or v8-profiler, or more advanced tools like perf or strace.

async.js is a library that provides a set of utility functions for working with asynchronous code, such as async.parallel() and async.series(). These functions allow you to execute multiple async tasks in parallel or in series, respectively. Here's an example of using async.parallel() to execute two async functions in parallel:

bluebird is a Promise library for Node.js that provides a number of advanced features, such as cancellation, timeouts, and error handling. Here's an example of using bluebird to chain together multiple async operations using Promises:

async.parallel and Promise.all are similar in that they both allow you to execute multiple async tasks in parallel, but there are some differences between them that may make one more appropriate than the other in certain situations.

async.parallel is a function provided by the async.js library, which is designed specifically for working with asynchronous code in Node.js. It allows you to execute multiple async tasks in parallel and provides a callback that is called once all tasks have completed. The advantage of using async.parallel is that it is easy to use and has a simple syntax. It is also very flexible, allowing you to pass in an array of functions or an object of functions, and providing options for controlling the concurrency and error handling.

Promise.all is a method provided by the built-in Promise object in JavaScript, which is used for working with Promises. It allows you to execute multiple Promises in parallel and returns a new Promise that resolves to an array of results once all Promises have completed. The advantage of using Promise.all is that it is a standard part of the JavaScript language and does not require any additional libraries or dependencies. It is also very powerful, allowing you to chain together multiple async operations using Promises and providing options for error handling and timeout handling.

In general, if you are already using Promises in your code, or if you need more advanced features like chaining or error handling, then Promise.all may be a better choice. However, if you are working with pure Node.js code and need a simple way to execute multiple async tasks in parallel, then async.parallel may be more appropriate. Ultimately, the choice between async.parallel and Promise.all will depend on the specific requirements of your application and the coding style that you prefer.

Promise.resolve() and Promise.reject(): These methods are used to create a new Promise that either resolves with a given value or rejects with a given reason.

Promise.all(): This method takes an array of Promises and returns a new Promise that resolves to an array of results when all of the input Promises have resolved, or rejects if any of the input Promises reject.

Promise.race(): This method takes an array of Promises and returns a new Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.

Promise.then(): This method is used to attach callbacks that will be called when the Promise resolves or rejects. It returns a new Promise that can be used for chaining additional .then() or .catch() callbacks.

Promise.catch(): This method is used to attach a callback that will be called if the Promise rejects. It returns a new Promise that can be used for chaining additional .then() or .catch() callbacks.

Promise.finally(): This method is used to attach a callback that will be called regardless of whether the Promise resolves or rejects. It is often used for cleanup tasks like closing resources or releasing locks.

Some best practices for optimizing the performance of a MongoDB database include using indexes, sharding for scalability, optimizing query patterns, and choosing appropriate server and storage configurations. Other strategies include using aggregation pipelines, minimizing disk I/O, and using the MongoDB profiler to identify performance bottlenecks.

Use indexes: Indexes help to speed up queries by allowing MongoDB to find data more quickly. Make sure that your queries are using the appropriate indexes, and consider creating indexes on frequently accessed fields.

Use the aggregation framework: The aggregation framework provides a way to perform complex queries and transformations on data in MongoDB. It can be used to group, filter, and project data in a flexible and efficient way.

Avoid expensive queries: Queries that involve sorting or scanning large amounts of data can be slow and resource-intensive. Try to avoid these types of queries whenever possible, and consider using a more efficient query strategy.

Use the correct data types: Make sure that your data is stored in the correct data types for the queries you will be running. For example, using a string to represent a date can cause performance issues when querying by date.

Denormalize data: In some cases, denormalizing data (i.e., duplicating data across documents) can improve query performance by reducing the need for joins and lookups.

Use the explain() method: The explain() method provides information about how MongoDB executed a query, and can be used to identify performance issues and optimize query patterns.

The output of the explain() method includes several fields, including:

"queryPlanner": Provides details about how MongoDB planned the query, including which indexes were considered and how many documents were estimated to be returned.

"winningPlan": Provides details about the plan that MongoDB ultimately chose to execute the query, including which indexes were used and how many documents were actually scanned.

"executionStats": Provides detailed performance metrics about how long the query took to execute, how many documents were scanned, and how many indexes were used.

Indexing in MongoDB is a way to speed up the process of finding data in a collection. Think of an index as a way to organize your data like a phone book: the phone book is sorted alphabetically by last name, so it's easy to find someone's phone number without having to search through the entire book.

When you create an index on a field in MongoDB, it creates a similar organization of data, making it easier and faster for MongoDB to find documents that match a specific query. Instead of scanning through the entire collection, MongoDB can look up the values in the index and quickly find the documents that match the query.

Creating too many indexes can slow down your application, just like having too many phone books would make it harder to find the right phone number. So it's important to create indexes on the fields that are frequently searched, but not to go overboard with creating too many indexes.

By using indexes, you can significantly improve the performance of your MongoDB applications, making them faster and more efficient.

In MongoDB, an index is created by analyzing the values in a specific field of a collection and creating a data structure that maps each value to the document(s) that contain it. This data structure is stored separately from the collection and can be used by MongoDB to quickly locate documents that match a query on that field.

To create an index, MongoDB first scans the collection and creates an index key for each document in the collection. The index key is a combination of the values in the indexed field(s) and a pointer to the corresponding document. The index key is then added to the index data structure.

MongoDB uses a type of index called a B-tree, which is a data structure that allows for fast searches of large sets of data. Each node in the B-tree represents a range of values in the indexed field(s) and contains pointers to the documents that fall within that range. When a query is executed on the indexed field(s), MongoDB searches the B-tree for the appropriate node(s) and retrieves the corresponding documents.

Creating indexes in MongoDB can significantly improve query performance, but it can also consume additional disk space and memory. It's important to carefully consider which fields to index and how to structure your indexes to optimize query performance while minimizing resource usage.

Some o/p :-
true + true = 2
null + undefined = Nan
true + false = 1
1 + '8' = '18'
*/