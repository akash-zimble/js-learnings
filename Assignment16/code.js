/**
 * There are couple of Issues with setTimeout(). And below are the some of them and their examples.
 */

// ====================================================================================================================

// 1. Execution Delay
// Issue: setTimeout specifies minimumDelay, but the exact timing can vary due to other tasks in event loop, or main thread may take much time then the delay.
// in below code we have given only 1sec delay in setTimeout, but other code in main thread taking around 10sec. So setTimeout() won't execute after 1 sec of hitting line number 13.
// To handle this, ensure critical code doesn't rely on precise timing.

let cb1  = function (){
    console.log("In setTimeout");
}

setTimeout(cb1, 1000);
let startTime = new Date(); // prints currentTime
console.log(startTime);
let endTime = startTime;
while (endTime - startTime < 10000) { 
    endTime = new Date();
}
console.log(endTime); // prints time after 10secs of above time.

// ====================================================================================================================

// 2. Scope & Context
// The 'this' context inside setTimeout may not have different scope then its parents scope.
// To handle this, you might use bind or arrow functions to preserve the context

function scopeIssue(){
    this.name = "This is the context"

    setTimeout(function() {
        console.log(this.name) // prints undefined
    }, 1000);

    setTimeout(() => {
        console.log(this.name) // prints "This is the context"
    }, 1000);
}

scopeIssue();

// ====================================================================================================================

// 3. Memory leak issues
// Issue: lets say you put setTimeout in a function, where large amount of data is defined, in this situation size of closure might take more memory. And this closure binds with setTimeout.
// so you might make that data to null, if we don't need that need data in setTimeout.
// To handle this issue you will assign non-required variables with null;


function memoryIssue(){
    let largeArray = new Array(10000000).fill("*");

    // you might work with above array and leave it as it is. Due to this large data will be bind to closure, which leads to unwanted memory leak.
    largeArray = null;

    setTimeout(function() {
        console.log("Inside setTimeout");
    },1000);
}

memoryIssue();