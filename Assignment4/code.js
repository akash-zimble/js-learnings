console.log(greet); // prints Funtion
console.log(greet2); // prints -> undefined
console.log(greet3); // prints -> undefined
console.log(x); // print undefined
// console.log(y); // throws an error

greet(); // prints -> Hello JS
// greet2(); // it throws error


var x = 5;

function greet(){
    console.log("Hello JS")
}

var greet2 = () => {
    console.log("Hello JS 2")
}

var greet3 = function () {
    console.log("Hello JS 3")
}

greet(); // prints -> Hello JS
greet2(); // prints -> Hello JS 2
console.log(greet); // prints -> Funtion
console.log(greet2); // prints -> Funtion
console.log(greet3); // prints -> Funtion
console.log(x); // print undefined

/**
 * Hoisting is JavaScript's default behavior of moving all variables and functions to the top of the current scope. 
 * This allows us to reference them before appearing in the code. However hoisting behaves differently for functions and variables for depending on their declaration type. 
 * 
 * Java Scripts code executes in two phases within Global Execution Context
 *      1) Memory Creation Phase:
 *          a) Memory will be allocated to all variables and functions
 *          v) Variables declared with var will be initialized as undefined 
 *          c) Name Functions like greet() are fully hoisted with their definitions 
 *          d) Arrow Functions(like greet2) and Function expressions (like greet3) are hoisted as variables with value undefined.
 *      2) Code Execution Phase:
 *          The code will be executed line by line, assigning values to variables and invoking function as they appear.
 * 
 * Function Hoisting:
 *      1) Named Functions: Named functions are fully hoisted. We can invoke them before its declaration without any errors.
 *      2) Function Expression & Arrow Functions: These are treated as variables. During hoisting value undefined will assigned to these type functions. If we try to invoke these functions we will get TypeError, as we trying to invoke undefined. 
 * 
 * Variable Hoisting: 
 *      1) Variables declared with var hoisted and initialized with value undefined during Memory Creation phase. 
 *      2) Unlike var, let and const are hoisted, but not initialized. So accessing them before declaration throws Reference Errors. 
 *   
 * Different Errors: 
 *      Reference Errors: 
 *          1) When we try to access variables which declared with keywords let and const.
 *          2) When we try to access variables which are not defined in the current scope
 * 
 *      Type Errors:
 *          1) When we try to invoke the anonymous function expression and array functions before its initiation(because it is stored as undefined at that point).
 */