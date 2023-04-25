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


SOLID principles :-
Single Responsibility Principle (SRP) - A class should have only one reason to change, which means that each class should have a single responsibility or job. This helps to keep the code organized and easier to modify.

Open-Closed Principle (OCP) - Software entities should be open for extension but closed for modification. This means that you should be able to add new functionality without changing the existing code.

Liskov Substitution Principle (LSP) - Subtypes should be substitutable for their base types. This means that objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.

Interface Segregation Principle (ISP) - Clients should not be forced to depend on interfaces they do not use. This means that classes should only be dependent on the interfaces that they need, and not on interfaces that they don't use.

Dependency Inversion Principle (DIP) - High-level modules should not depend on low-level modules. Both should depend on abstractions. This means that you should not depend on implementation details of other classes, but instead rely on abstractions or interfaces.


OOPS :-

Object-Oriented Programming, also known as OOP, is a programming paradigm that uses objects to represent and manipulate data.

In OOP, objects are created from classes, which are like blueprints for creating objects. Each object has properties, also known as attributes, and behaviors, also known as methods, which can be accessed and manipulated through the object.

Here are some basic concepts of OOP in easy language:

Encapsulation - Encapsulation is the practice of hiding the implementation details of an object from the outside world. This is done by setting access modifiers on attributes and methods, which control who can access and modify them.

Inheritance - Inheritance allows classes to inherit properties and behaviors from other classes. This allows for code reuse and helps to reduce duplication.

Polymorphism - Polymorphism allows objects of different types to be treated as if they are of the same type. This is achieved through method overriding and method overloading, which allow for different behavior depending on the object's type.

Abstraction - Abstraction is the process of identifying the essential features of an object, while ignoring the non-essential details. This allows for easier understanding and manipulation of complex systems.

OOP provides a powerful way to organize and manipulate data in a structured and organized manner. By using objects and classes, developers can create software that is more maintainable, extensible, and scalable

When sql and when nosql :-
The choice between SQL and NoSQL databases depends on the specific requirements of the application and the data being stored. Here are some general guidelines:

Use SQL databases when:
You need to handle complex transactions, such as financial transactions or reservations.
You have a well-defined schema that will not change frequently.
Your application needs to perform advanced queries, such as joins, aggregations, and grouping.
You have large amounts of structured data that needs to be normalized to reduce redundancy.
You need to ensure data consistency and reliability.

Use NoSQL databases when:
You need to handle large volumes of unstructured or semi-structured data, such as social media data, sensor data, or logs.
You have a dynamic schema that can evolve over time.
Your application requires high scalability, availability, and performance.
You need to store data in a distributed environment, such as a cloud or a cluster.
You need to store and retrieve data quickly and efficiently, without the overhead of complex transactions and joins.

MVC Architecture :-

MVC architecture stands for Model-View-Controller architecture. It is a design pattern that separates an application into three main components: the model, the view, and the controller.

Here's a simple explanation of each component:

Model - The model represents the data and the logic behind the data. It encapsulates the business logic and provides an interface for accessing and modifying the data. The model is responsible for storing and retrieving data from the database.

View - The view represents the user interface that the user sees and interacts with. It displays the data from the model and allows the user to interact with the application. The view is responsible for rendering the data and sending user input to the controller.

Controller - The controller acts as a mediator between the model and the view. It receives user input from the view and updates the model accordingly. It also retrieves data from the model and sends it to the view for display. The controller is responsible for handling user input, updating the model, and updating the view.

The main advantage of the MVC architecture is that it separates the concerns of the application into distinct components. This makes the application more modular, easier to maintain, and easier to test. Additionally, it allows developers to work on different parts of the application without interfering with each other's work.

Overall, the MVC architecture provides a flexible and scalable approach to building applications.

MVVM Architecture :-

MVVM stands for Model-View-ViewModel, and it is a design pattern that is similar to the MVC architecture, but with some key differences.

In the MVVM pattern, the view is responsible for displaying the data and user interface, the model is responsible for storing and manipulating the data, and the view model acts as an intermediary between the view and the model.

Here's a breakdown of the components:

Model - The model is responsible for managing the data and business logic. It is similar to the model in the MVC architecture.

View - The view is responsible for displaying the user interface to the user. It is similar to the view in the MVC architecture.

View Model - The view model acts as an intermediary between the view and the model. It exposes the data and operations of the model to the view, and provides the view with the necessary data and behavior to display and interact with the data. The view model also contains the state and behavior of the view, such as user input and display settings.

In software development, a ViewModel is a design pattern that separates the data and behavior of a view from the underlying data model. It is commonly used in conjunction with the Model-View-Controller (MVC) or Model-View-ViewModel (MVVM) architectures.

The ViewModel is responsible for managing the data and behavior that is specific to the view. It provides an abstraction layer between the view and the underlying data model, which enables the view to display and manipulate data without having to directly interact with the data model.

The key difference between the ViewModel and the Model is that the ViewModel is designed to provide a representation of the data that is specifically tailored to the needs of the view. It encapsulates the data and behavior that is relevant to the view, and provides a simplified interface for the view to interact with.

For example, in a web application that displays a list of products, the ViewModel might contain a collection of Product objects that have been filtered, sorted, and formatted to meet the requirements of the view. The ViewModel might also contain methods for retrieving and updating the product data, as well as handling user input and validation.

Agile is an approach to software development that emphasizes flexibility, collaboration, and responsiveness to change. It is based on the Agile Manifesto, which was created by a group of software developers in 2001.

The main principles of Agile include:

Individuals and interactions over processes and tools
Working software over comprehensive documentation
Customer collaboration over contract negotiation
Responding to change over following a plan
The Agile approach is iterative and incremental, meaning that it involves breaking down a project into smaller, more manageable pieces and delivering working software at regular intervals. This allows for frequent feedback and enables the team to respond to changing requirements.

Agile is also characterized by its emphasis on collaboration and communication. Agile teams are typically self-organizing and cross-functional, meaning that they have all the skills and expertise necessary to deliver a software product. The team is responsible for planning, designing, developing, testing, and delivering the software.

Overall, Agile provides a flexible and adaptive approach to software development that prioritizes customer satisfaction, working software, and responsiveness to change. It can help teams to deliver software products faster, with higher quality, and with greater customer satisfaction.

Scrum is a popular agile framework that is used in software development and project management. It is designed to help teams deliver high-quality software products in an iterative and incremental manner.

The main principles of Scrum include:

Iterative and Incremental Delivery: Scrum teams work in short iterations, typically 2-4 weeks, and deliver working software at the end of each iteration. This allows for frequent feedback and enables the team to respond to changing requirements.

Self-Organizing Teams: Scrum teams are self-organizing and cross-functional, meaning that they have all the skills and expertise necessary to deliver a software product. The team is responsible for planning, designing, developing, testing, and delivering the software.

Agile Planning: Scrum teams use a collaborative planning process to define the goals and scope of each iteration. This involves creating a prioritized backlog of user stories or requirements, estimating the effort required to complete each item, and selecting the items to work on in the current iteration.

Daily Stand-up Meetings: Scrum teams hold daily stand-up meetings, also known as daily scrums, to synchronize their work and identify any issues or obstacles that need to be addressed.

Continuous Improvement: Scrum teams continuously improve their processes and practices through retrospectives, which are meetings held at the end of each iteration to review what went well, what didn't go well, and what can be improved.

Overall, Scrum provides a flexible and adaptive approach to software development that emphasizes collaboration, feedback, and continuous improvement. It can help teams to deliver software products faster, with higher quality, and with greater customer satisfaction.

JOINS in SQL :-

Inner Join: This is the most common type of join used in SQL. It returns only the rows that have matching values in both tables being joined. Inner join is used when we need only the common records from both the tables.

Left Join: Left join returns all the records from the left table and matching records from the right table. If there are no matching records in the right table, NULL values are returned.

Right Join: Right join returns all the records from the right table and matching records from the left table. If there are no matching records in the left table, NULL values are returned.

Full Outer Join: Full outer join returns all the records from both the tables being joined. If there are no matching records in one of the tables, NULL values are returned.

Cross Join: Cross join returns the Cartesian product of both the tables being joined. This means that it returns all possible combinations of rows from both tables.

KEYS in SQL :-

Primary key: A primary key is a column or a group of columns that uniquely identifies each record in a table. Primary keys are used to enforce data integrity and to establish relationships between tables.

Foreign key: A foreign key is a column or a group of columns that refers to the primary key of another table. Foreign keys are used to establish relationships between tables and to ensure referential integrity.

Unique key: A unique key is a column or a group of columns that has a unique value for each record in a table. Unlike a primary key, a unique key can contain NULL values.

Composite key: A composite key is a combination of two or more columns that uniquely identifies each record in a table.

Candidate key: A candidate key is a column or a group of columns that could potentially serve as a primary key. In other words, it's a unique identifier for each record in a table, but it hasn't been chosen as the primary key yet.

Alternate key: An alternate key is a column or a group of columns that could also serve as a primary key, but the primary key has already been chosen.

It's important to note that primary keys and unique keys are used to enforce data integrity, while foreign keys are used to establish relationships between tables. Composite keys, candidate keys, and alternate keys are used for identification purposes.

binary search tree and a binary heap :-

binary search tree is a tree data structure where each node has at most two children, and the left child is less than the parent, while the right child is greater. A binary heap, on the other hand, is a tree data structure where each node has at most two children, and the parent is always less than or equal to the children (in a min-heap) or greater than or equal to the children (in a max-heap).

SDLC :-

SDLC is a methodology used by software development teams to plan, design, build, test, and deploy software. The SDLC typically consists of several phases, including requirements gathering, design, implementation, testing, and maintenance.

Hash Table :-
hash table is a data structure that maps keys to values using a hash function. The hash function takes the key as input and generates a unique index into an array of buckets, where the value is stored. The hash function should be designed such that it minimizes collisions, where multiple keys hash to the same bucket.

Array and linked list :-
array is a collection of elements stored in contiguous memory locations, where each element can be accessed by its index. A linked list, on the other hand, is a collection of elements where each element points to the next element in the list. Linked lists have dynamic memory allocation, while arrays have fixed memory allocation.

REST API's :-
RESTful API is a type of web service that follows the principles of Representational State Transfer (REST). RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. Resources are identified by unique URIs, and the data is typically represented in JSON or XML format.

Code refactoring :-
code refactoring is the process of improving the design and quality of existing code without changing its external behavior. Code refactoring can help to reduce technical debt, improve code maintainability, and reduce bugs and defects.

Compiler and interpreter :-
A compiler is a program that translates source code into machine code, which can be executed by a computer. An interpreter, on the other hand, translates and executes the source code line by line, without generating an executable file. Interpreted languages are typically slower than compiled languages, but they allow for greater flexibility and ease of use.

Design Pattern :-
Design pattern is a reusable solution to a commonly occurring problem in software design. Design patterns can help to improve the quality, flexibility, and maintainability of code. An example of a design pattern is the Singleton pattern, which ensures that only one instance of a class is created and provides a global point of access to that instance.

Normalization :-
Normalization is a process used in database design to organize data in a way that reduces redundancy and dependency, and ensures data integrity. There are several levels of normalization, each building on the previous level to further reduce redundancy and improve data organization. The different types of normalization are:

First Normal Form (1NF): In 1NF, data is organized into tables with a primary key, and each column contains atomic (indivisible) values. This eliminates repeating groups and allows for efficient querying.

Second Normal Form (2NF): In 2NF, all non-key columns are dependent on the primary key, and not on each other. This eliminates partial dependencies and ensures that each table contains only related data.

Third Normal Form (3NF): In 3NF, all non-key columns are dependent only on the primary key, and not on other non-key columns. This eliminates transitive dependencies and ensures that data is stored in the most efficient and organized way possible.

Boyce-Codd Normal Form (BCNF): BCNF is a stricter version of 3NF, in which each determinant (a column or group of columns that determines the value of another column) is a candidate key. This ensures that every dependency is a result of the key, and not of other columns.

Fourth Normal Form (4NF): 4NF is used in special cases where multiple independent multi-valued dependencies exist in a table. It ensures that each table contains only relevant and non-redundant data.

Clustered and non-clustered index in SQL :-
A clustered index determines the physical order of data in a table, whereas a non-clustered index creates a separate structure that points to the data in a table. In other words, a clustered index physically reorders the data in a table, whereas a non-clustered index does not.

Stored Procedures in SQL :-
A stored procedure is a pre-written program that is saved in a database and can be executed multiple times. It is often used to perform common tasks, such as inserting or updating data in a table, and can be called by other programs or scripts. Stored procedures can improve performance, reduce errors, and simplify coding.

Transaction :- 
A transaction is a series of SQL statements that are executed as a single unit of work. Transactions are used to ensure data integrity and consistency in a database, by ensuring that either all of the statements in a transaction are completed successfully, or none of them are completed at all. Transactions can be used to perform tasks such as updating multiple tables, maintaining database constraints, and ensuring that all data is accurate and consistent.

SQL Triggers :-
A trigger is a special type of stored procedure that is automatically executed in response to certain events, such as inserting, updating, or deleting data from a table. Triggers can be used to enforce business rules, maintain data integrity, and provide automated data processing. They are often used in conjunction with stored procedures to automate database operations and ensure consistency.

Database Index :-
A database index is a data structure that is used to improve the performance of database queries. It works by creating a separate data structure that stores a subset of the data in a table, and provides faster access to the data that is needed for a query. Indexes can be created on one or more columns in a table, and can significantly improve the performance of queries that involve those columns. However, indexes can also have a negative impact on database performance if they are not used correctly.
*/