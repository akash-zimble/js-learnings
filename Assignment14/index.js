/**
 * JavaScript is single-threaded and uses an asynchronous event-driven model.
 * It relies on Web APIs (provided by browsers or Node.js) for async operations.
 * 
 * These WebAPIs are bundeled into one object named window, which is Global Object, will be attached to the Global Execution Context.
 * 
 * Examples of Web APIs:
 *   - fetch (network requests)
 *   - setTimeout / setInterval (timers)
 *   - DOM APIs (document.getElementById, etc.)
 *   - localStorage (storage API)
 *   - console (logging)
 * 
 * 
 * Instead of using:
 *   window.setTimeout(() => console.log("Hello"), 1000);
 * We can use:
 *   setTimeout(() => console.log("Hello"), 1000);
 * 
 * JavaScript handles async execution using:
 *   1. Call Stack (Executes synchronous code)
 *   2. Web APIs (Handles async operations like fetch, setTimeout)
 *   3. Microtask Queue (Handles high-priority callbacks, e.g., Promises)
 *   4. Callback Queue (Handles lower-priority callbacks, e.g., setTimeout)
 *   5. Event Loop (Moves tasks from the queues to the Call Stack when free)
 * 
 * The Event Loop:
 *   - Checks if the Call Stack is empty.
 *   - Pushes tasks from the Microtask Queue first.
 *   - Then pushes tasks from the Callback Queue.
 */

// Microtask Queue vs Callback Queue Example
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("Synchronous Log");


// Above Code prints
// Synchronous Log
// Promise (from Microtask Queue)
// setTimeout (from Callback Queue)


function getButtonCountCallBack() {
    let count = 0;
    setTimeout
    return function(){
        console.log(++count);
    }
}

document.getElementById("clickMe").addEventListener("click", getButtonCountCallBack());