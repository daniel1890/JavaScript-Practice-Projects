# Wat informatie over async functies in JavaScript:

Async functions can contain zero or more await expressions. 
Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. 
The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

The await keyword is only valid inside async functions within regular JavaScript code. 
If you use it outside of an async function's body, you will get a SyntaxError.

await can be used on its own with JavaScript modules.

The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. 
The behavior of async/await is similar to combining generators and promises.

Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

For example, the following:

async function foo() {
   return 1
}
...is equivalent to:

function foo() {
   return Promise.resolve(1)
}
The body of an async function can be thought of as being split by zero or more await expressions. 
Top-level code, up to and including the first await expression (if there is one), is run synchronously. 
In this way, an async function without an await expression will run synchronously. 
If there is an await expression inside the function body, however, the async function will always complete asynchronously.

For example:

async function foo() {
   await 1
}
...is equivalent to:

function foo() {
   return Promise.resolve(1).then(() => undefined)
}
Code after each await expression can be thought of as existing in a .then callback. 
In this way a promise chain is progressively constructed with each reentrant step through the function. 
The return value forms the final link in the chain.