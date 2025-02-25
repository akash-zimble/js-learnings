/**
 * A closure is a combination of a function bundled together with its references to its surrounding state (Lexical Environment).
 * A closure gives access to its outer scope.
 * 
 * In JavaScript, closures are created every time a function is created.
 */

function additionOf(x) {
    return function additionWith(y) {
        return x + y;
    };
}

let additionOf5 = additionOf(5);

/**
 * Some hundreds of lines
 */

let result = additionOf5(7);
console.log(result); // Output: 12

/**
 * Explanation:
 * 1. The `additionOf` function is invoked with `5`, and it returns the inner function `additionWith`.
 * 2. The inner function maintains access to the variable `x` from its outer function's scope.
 * 3. When we call `additionOf5(7)`, it uses the value of `x` (which is 5) from the closure and adds it to `7`.
 * 
 * Although the execution of `additionOf` has finished, its variable `x` is still accessible to the returned function due to the closure.
 * 
 * 
 * The main advantage of closures is data encapsulation. The value of outter scope variables, can not be modified, once the function is created.
 * 
 * Below example shows how closures help maintain a private variable (count) that cannot be accessed directly. 
 * This technique is useful when we need to protect variables from being modified accidentally, such as in counters, state management, or encapsulating logic within modules.
 * 
 * And lexical environment its save refrences, not the values.
 */


function createCounter(){
    let count = 0;
    return {
        increment: function(){
            return ++count;
        },
        decrement: function(){
            return --count;
        },
        getCount: function(){
            return count;
        }
    }
}

let counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());
