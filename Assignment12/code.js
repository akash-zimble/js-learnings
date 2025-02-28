let f1 = function(param1){
    param1();
    return function(){
        console.log("Inside of reterned function");
    }
}

let f2 = function(){
    console.log("Inside of passing function");
}

let f3 = f1(f2);
f3();

/**
 * The ability of using functions as varibles is called First Class functions.
 * We can pass these functions to functions as arguments, and also we can return the functions as values. This is why we call functions as First Class Citizens of JavaScript
 * 
 * Anounmous functions are functions which does not have name or identity. We use  anounnamys functions to pass a function, or return a function or storing function into one variable. 
 */


// A function statement is a way to define a named function using function keyword. It is hoisted entirely, meaning its name and defination moved to the top of scope during compilation.
  
a();

function a(){
    console.log("Inside Function a");
}

a();

// Function Expression assigns funciton into variable. Unlike function declaration, function expressions are not hoisted with their body, only the variable name hoisted.

// b(); throws error, because while hoisting b trated as varible.

let b = function(){
    console.log("Inside Function b");
}

b();

// Named function expression is a function expression with an internal name that can be used within its own body. However this not available outside of function scope.

let val = 0;
let c  = function abc(){
    console.log("Inside Function C");
    val++;
    if(val < 5){
        abc();
    }
}
c();

// abc() will throw error.