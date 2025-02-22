// console.log(a);  // throws 'ReferenceError: Cannot access 'a' before initialization' 

let a = 10;
console.log(a); // print -> 10, due its temporal dead zone ends as a is initialized in line 3.
// let a = 100; // this line throws "SyntaxError: Identifier 'a' has already been declared", because let and const does not support re-declaration
const c = 10;
console.log(c); // print -> 10, due its temporal dead zone ends as a is initialized in line 7.
// const c = 1000; // this line throws "SyntaxError: Identifier 'a' has already been declared"

console.log(b); // prints-> undefined, due to var varibles hoisted fully.
var b = 50;
var b = 100; // this line does not throw any error, because var does support re-declaration

// console.log(z); // throws -> ReferenceError: z is not defined, due to it is not defined.

// const k; // throws -> SyntaxError: Missing initializer in const declaration
// c =100; // throws -> TypeError: Assignment to constant variable.

/**
 * There are 4 ways to declare a variable. In these `z=6` should be avoided as it creates global variables unintentionally..
 * And other 3 are using var, let and const keywords. And the varibles created by these keywords are hoisted. But the hoisting different for these 3.
 * 
 * For varibles which declared with 'var' keyword aer hoisted and these variables are saved in window, which is global object.
 * For varibles which declared with 'let' and 'const' keywords are also hoisted but these will be saved in different object called Script. We generally can not access this Script Object.
 * 
 * At line number 1, unlike var variables, the let and const variables can not be accessed due to Temporal Dead Zone.
 * 
 * Temporal Dead zone of a varibles is a time frame between instant when varible is hoisted and when variable is initialized.
 * In this Temporal Dead Zone we can not access let and const variables. If we try to access them we will get 'ReferenceError: Cannot access 'a' before initialization'.
 * 
 * Unlike var, we can not re-declare let and const varibles. If we try to re-declare let and const variables, it throws syntax error which doesnot allow code to start execution.
 * 
 * In line 16, we can not declare const variable without intilising it.
 * In line 17, we can not re assign value to const variables
 * 
 * Compare to var, let varibles are strict. and compare to let, const are more strict.
 * 
 * In out day yo day coding it is advised ton use let and const keywords due to its strictness
 */