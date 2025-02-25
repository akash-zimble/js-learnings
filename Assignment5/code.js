var x = 5;
var y = 20;
k = 20;
a();
console.log(x); //prints => 5
console.log(y); // prints => 40
console.log(x1); //prints => 50

function a(){
    var x = 10;
    var z = 30;
    console.log(x); //prints => 10
    console.log(y); //prints => 20
    console.log(z); //prints => 30
    x = 10; // it changes local scope varaible
    y = 40; // it changes global variable, as it is not defined in local scope.
    x1 = 50; // as we have not declared neither local nor global. And as we didnt mention var it gonna create global variable. And this is bad practise, as it is not gonna work when we use "use strict";
    console.log(x1); //prints => 50
}

// console.log(z);  // throws ReferenceError as it is defined a function.


/**
 * Global variables: variables which are defined at main scope. These varaiables can be accessed anywhere.
 * Local variables: variables which are defined in specific function. These varaible scope limited to functions in which they are defined.
 * 
 * When we try access some variable in one function, it first check local scope. It checks its outter function if it exists. If it doesn't exist, it checks in the global scope. (Lexical Scoping)
 * 
 * If we dont use any keyword while declaring variable in local scope, then it gonna create global variable. 
 */